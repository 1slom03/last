export type User = {
  fullname: string;
  email: string;
  password: string;
  age: number;
};

export let users: User[] = [
  {
    fullname: "Karimjonov Islomjon",
    email: "karimjonov@gmail.com",
    password: "123",
    age: 23,
  },
];

export function getStoredUsers(): User[] {
  if (typeof window === "undefined") {
    return users;
  }

  try {
    const savedUsers = localStorage.getItem("users");
    if (!savedUsers) {
      saveUsers(users);
      return users;
    }

    const parsedUsers = JSON.parse(savedUsers) as User[];
    users = Array.isArray(parsedUsers) ? parsedUsers : users;
    return users;
  } catch (error) {
    console.error("Foydalanuvchilarni yuklashda xatolik:", error);
    return users;
  }
}

export function saveUsers(updatedUsers: User[]) {
  if (typeof window === "undefined") {
    return;
  }

  users = updatedUsers;
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}

export function addUser(newUser: User) {
  const existingUsers = getStoredUsers();

  const alreadyExists = existingUsers.some(
    (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
  );

  if (alreadyExists) {
    return existingUsers;
  }

  const updatedUsers = [...existingUsers, newUser];
  saveUsers(updatedUsers);
  return updatedUsers;
}

export function updateUser(index: number, updatedUser: Partial<User>) {
  const existingUsers = getStoredUsers();
  if (!existingUsers[index]) {
    return existingUsers;
  }

  const nextUsers = existingUsers.map((user, userIndex) =>
    userIndex === index ? { ...user, ...updatedUser } : user
  );

  saveUsers(nextUsers);
  return nextUsers;
}

export function findUserByEmailAndPassword(email: string, password: string) {
  const allUsers = getStoredUsers();
  return allUsers.find(
    (user) =>
      user.email.toLowerCase() === email.trim().toLowerCase() &&
      user.password === password
  );
}

export function setActiveUser(user: User | null) {
  if (typeof window === "undefined") {
    return;
  }

  if (!user) {
    localStorage.removeItem("activeUser");
    return;
  }

  localStorage.setItem("activeUser", JSON.stringify(user));
}

export function getActiveUser(): User | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const savedUser = localStorage.getItem("activeUser");
    if (!savedUser) {
      return null;
    }

    return JSON.parse(savedUser) as User;
  } catch (error) {
    console.error("Aktiv foydalanuvchini yuklashda xatolik:", error);
    return null;
  }
}

export default users;
