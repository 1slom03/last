"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const categories = ["Hammasi", "Dasturlash", "Dizayn", "Marketing", "Tillar"];

type Course = {
  id: number;
  title: string;
  img: { src: string; width: number; height: number };
  category: string;
  desc: string;
  lessons: string;
  level: string;
  rating: string;
  reviews: string;
  price: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          O'zingizga mos kursni tanlang
        </h1>
        <p className="text-slate-600">
          Dasturlash, dizayn, marketing va tillar bo'yicha amaliy kurslar — mentorlar bilan, o'z tezligingizda.
        </p>
      </div>

      {loading && (
        <p className="text-center text-slate-500">Kurslar yuklanmoqda...</p>
      )}

      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="bg-white border border-slate-100 rounded-2xl shadow-md p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer block" >
              <div className="relative h-45 rounded-xl mb-4 overflow-hidden bg-slate-100">
                <Image src={course.img.src} alt={course.title} fill className="object-cover" />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 text-xs font-bold text-slate-900">
                  {course.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1.5">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-3 leading-relaxed">{course.desc}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <span>{course.lessons}</span>
                <span>·</span>
                <span>{course.level}</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="inline-flex items-center gap-1 text-sm font-bold text-slate-900">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  {course.rating} <span className="text-slate-400 font-normal">({course.reviews})</span>
                </span>
                <span className="text-sm font-bold text-indigo-600">{course.price} so'm</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}