import { PATH } from "@/components/PATH";
import { Frontend, Raqamli, UL } from "@/public";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-indigo-50/60 min-h-100% overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 mb-5">
            O'rganing. Amaliyot qiling.{" "}
            <span className="bg-linear-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Kasbingizni yarating.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 max-w-md mb-8">
            Acadex — dasturlash, dizayn va biznes bo'yicha amaliy kurslar
            platformasi. O'z tezligingizda o'rganing, mentorlardan yordam
            oling va sertifikat bilan yakunlang.
          </p>
          <div className="flex items-center gap-4 mb-10 text-center">
            <Link href={PATH.courses} className="w-full py-3.5 rounded-xl text-white font-bold bg-linear-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-300/50 hover:opacity-90 transition-opacity">
              Kursni ko`rish
            </Link>
          </div>
        </div>

        {/* Right: course card stack visual */}
        <div className="relative h-96 mt-8 md:mt-0">
          <div className="absolute bottom-45 left-20 w-64 bg-white rounded-2xl shadow-xl p-4 -rotate-6 z-10 transition-all duration-300 ease-out cursor-pointer hover:-rotate-1 hover:scale-105 hover:shadow-2xl hover:z-50">
            <img src={UL.src} alt="Frontent kurs" className="w-full h-35 rounded-[20px] mb-3.3" />
            <p className="text-sm font-bold text-slate-900 mb-1.5">UI/UX Dizayn asoslari</p>
            <p className="text-xs text-slate-500 mb-3">24 dars · Boshlang'ich</p>
            <div className="w-full h-1.5 rounded-full bg-indigo-100 overflow-hidden">
              <div className="h-full rounded-full bg-linear-to-r from-indigo-600 to-violet-600 w-[70%]" />
            </div>
          </div>

          <div className="absolute top-14 right-15 w-64 bg-white rounded-2xl shadow-xl p-4 rotate-3 z-20 transition-all duration-300 ease-out cursor-pointer hover:rotate-1 hover:scale-105 hover:shadow-2xl hover:z-50">
            <img src={Frontend.src} alt="Frontent kurs" className="w-full h-35 rounded-[20px] mb-3.5" />
            <p className="text-sm font-bold text-slate-900 mb-1.5">React bilan Frontend</p>
            <p className="text-xs text-slate-500 mb-3">32 dars · O'rta daraja</p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900">
              2.1k
            </span>
          </div>

          <div className="absolute top-40 left-30 w-64 bg-white rounded-2xl shadow-xl p-4 -rotate-3 z-30 transition-all duration-300 ease-out cursor-pointer hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-50">
            <img src={Raqamli.src} alt="Frontent kurs" className="w-full h-35 rounded-[20px] mb-3.5" />
            <p className="text-sm font-bold text-slate-900 mb-1.5">Raqamli marketing</p>
            <p className="text-xs text-slate-500 mb-3">18 dars · Boshlang'ich</p>
            <div className="w-full h-1.5 rounded-full bg-indigo-100 overflow-hidden">
              <div className="h-full rounded-full bg-linear-to-r from-indigo-600 to-violet-600 w-[45%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}