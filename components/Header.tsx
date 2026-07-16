"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PATH } from "./PATH";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Header() {
    const pathname = usePathname();
    const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);

    const linkClass = (href: string) => `px-4 py-2 rounded-lg text-sm duration-200 border-b-2 bg-transparent hover:scale-105 active:scale-105 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 ${pathname === href ? "text-indigo-600 font-bold border-indigo-600" : "text-slate-900 font-medium border-transparent"}`;

    return (
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between px-4 py-3 max-w-300 mx-auto">
                <a href={PATH.home} className="flex items-center text-2xl font-bold">
                    <SchoolIcon sx={{ color: "#4F46E5", fontSize: 32, mr: 1 }} />
                    <span className="text-indigo-600">Acade</span>
                    <span className="text-slate-900">x</span>
                </a>

                <div className="flex items-center gap-1">
                    <Link href={PATH.home} className={linkClass(PATH.home)}>Bosh sahifa</Link>
                    <Link href={PATH.courses} className={linkClass(PATH.courses)}>Kurslar</Link>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outlined" sx={{ mr: 1 }} onClick={() => setAuthModal("login")}>
                        Login
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "#4F46E5" }} onClick={() => setAuthModal("register")}>
                        Register
                    </Button>
                </div>
            </div>

            <LoginModal open={authModal === "login"} onCloseAction={() => setAuthModal(null)} onSwitchAction={() => setAuthModal("register")} />
            <RegisterModal open={authModal === "register"} onCloseAction={() => setAuthModal(null)} onSwitchAction={() => setAuthModal("login")}/>
        </header>
    );
}