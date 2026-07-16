import { Beckend, Frontend, Raqamli, UL } from "@/public";

export const courses = [
  { id: 1, title: "Frontend: React va Next.js", img: Frontend, category: "Dasturlash", desc: "Zamonaviy veb-saytlarni React va Next.js yordamida yaratishni o'rganing.", lessons: "32 dars", level: "O'rta daraja", rating: "4.9", reviews: "2.1k", price: "590 000", icon: "code" },
  { id: 2, title: "Backend: Node.js va Express", img: Beckend, category: "Dasturlash", desc: "Server tomonlama dasturlash, API yaratish va ma'lumotlar bazasi bilan ishlash.", lessons: "28 dars", level: "O'rta daraja", rating: "4.7", reviews: "1.4k", price: "590 000", icon: "code" },
  { id: 3, title: "UI/UX Dizayn asoslari", img: UL, category: "Dizayn", desc: "Foydalanuvchi uchun qulay va chiroyli interfeyslar yaratishni o'rganing.", lessons: "24 dars", level: "Boshlang'ich", rating: "4.8", reviews: "1.8k", price: "450 000", icon: "palette" },
  { id: 4, title: "Raqamli marketing", img: Raqamli, category: "Marketing", desc: "Ijtimoiy tarmoqlar va reklama orqali mijozlar oqimini oshirishni o'rganing.", lessons: "18 dars", level: "Boshlang'ich", rating: "4.6", reviews: "2.4k", price: "390 000", icon: "megaphone" },
];