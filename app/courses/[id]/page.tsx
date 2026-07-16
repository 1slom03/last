"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft, Phone } from "lucide-react";

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

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center py-20 text-slate-500">Yuklanmoqda...</p>;
  }

  if (!course) {
    return <p className="text-center py-20 text-slate-500">Kurs topilmadi.</p>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/courses" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:underline mb-6" >
        <ArrowLeft size={16} />
        Barcha kurslarga qaytish
      </Link>

      <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-100 mb-6">
        <Image src={course.img.src} alt={course.title} fill className="object-cover" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-slate-900">
          {course.category}
        </span>
      </div>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">{course.title}</h1>
      <p className="text-slate-600 leading-relaxed mb-6">{course.desc}</p>

      <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
        <span>{course.lessons}</span>
        <span>·</span>
        <span>{course.level}</span>
        <span>·</span>
        <span className="inline-flex items-center gap-1 font-bold text-slate-900">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          {course.rating} ({course.reviews})
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
        <span className="text-2xl font-bold text-indigo-600">{course.price} so'm</span>
        <a href="tel:+998901234567" className="flex items-center gap-4 px-7 py-3 cursor-pointer rounded-xl text-sm font-semibold text-white bg-linear-to-br from-indigo-600 to-violet-600 hover:opacity-90 transition-opacity">
          Malumot olish
          <Phone width={18} height={18}/>
        </a>
      </div>
    </section>
  );
}