"use client";

import { useEffect, useState } from "react";
import { getActiveUser, type User } from "../api/data";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getActiveUser());
  }, []);

  if (!user) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eef2ff,#f8fafc_45%,#f1f5f9_100%)] px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white/80 p-10 text-center shadow-sm backdrop-blur">
          <h1 className="text-2xl font-bold text-slate-900">Hozircha profil ma’lumotlari yo‘q</h1>
          <p className="mt-2 text-slate-500">Ro‘yxatdan o‘ting, so‘ngra bu sahifa avtomatik to‘ldiriladi.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eef2ff,#f8fafc_45%,#f1f5f9_100%)] px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
        <section className="w-full lg:max-w-sm">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/90 shadow-[0_20px_60px_-25px_rgba(79,70,229,0.35)] backdrop-blur">
            <div className="bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-500 px-6 py-8 text-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-2xl font-black">
                {user.fullname.charAt(0).toUpperCase()}
              </div>
              <h1 className="mt-5 text-2xl font-black">{user.fullname}</h1>
              <p className="mt-2 text-sm text-indigo-100">Shaxsiy profil sahifasi</p>
            </div>

            <div className="space-y-4 p-6">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Email</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{user.email}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Yosh</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{user.age} yosh</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Parol</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{user.password}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex-1">
          <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">Profile</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">Salom, {user.fullname.split(" ")[0]}!</h2>
            <p className="mt-3 text-slate-600">
              Sizning shaxsiy profilingizda asosiy ma’lumotlaringiz va hisobingizga oid tafsilotlar ko‘rinadi.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                <p className="text-sm font-semibold text-indigo-700">Hisob holati</p>
                <p className="mt-2 text-2xl font-black text-slate-900">Faol</p>
              </div>
              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
                <p className="text-sm font-semibold text-violet-700">Profil turi</p>
                <p className="mt-2 text-2xl font-black text-slate-900">Foydalanuvchi</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
