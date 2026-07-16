import { PATH } from "@/components/PATH";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center bg-indigo-50/60 px-6 py-4">
            <div className="max-w-xl w-full rounded-3xl bg-white p-10 text-center shadow-xl shadow-indigo-100">
                {/* Logo mark */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="white" />
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="white" />
                    </svg>
                </div>

                {/* Big 404 */}
                <p className="text-7xl font-extrabold tracking-tight bg-linear-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-bold text-slate-900">
                    Sahifa topilmadi
                </h1>
                <p className="mt-3 text-base leading-7 text-slate-600">
                    Siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga
                    ko'chirilgan bo'lishi mumkin.
                </p>

                <div className="mt-8 flex items-center justify-center gap-3">
                    <Link
                        href={PATH.home}
                        className="inline-flex rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/50 transition hover:opacity-90"
                    >
                        Bosh sahifaga qaytish
                    </Link>
                    <Link
                        href={PATH.courses}
                        className="inline-flex rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50"
                    >
                        Kurslarni ko'rish
                    </Link>
                </div>
            </div>
        </div>
    );
}