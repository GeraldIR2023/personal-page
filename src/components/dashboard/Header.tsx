"use client";
import Image from "next/image";
import { Clock } from "./Clock";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
    const pathName = usePathname();

    const getPage = () => {
        if (pathName.includes("/library")) return "Library";
        if (pathName.includes("/profile")) return "Profile";
        if (pathName.includes("/experience")) return "Experience";
        return "Gerald Corrales";
    };

    return (
        <header className="w-full relative z-50">
            <div className="flex justify-between items-center px-2 py-1">
                <Link
                    href="/home"
                    className="flex items-center gap-4 group cursor-pointer transition-transform active:scale-95"
                >
                    <div className="flex items-center gap-4">
                        <Image
                            src="/img/Logo.png"
                            alt="Logo"
                            width={32} //TODO: Adjust text
                            height={32}
                            className="object-contain"
                        />
                        <h1 className="font-bebas text-2xl tracking-widest text-[#F8F9FA] uppercase opacity-90">
                            {getPage()}
                        </h1>
                    </div>
                </Link>

                <div className="font-mono text-xl tracking-tighter text-[#F8F9FA]/80">
                    <Clock />
                </div>
            </div>
            <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </header>
    );
};
