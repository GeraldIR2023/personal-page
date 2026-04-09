"use client";
import Image from "next/image";
import { Clock } from "./Clock";

export const Header = () => {
    return (
        <header className="w-full relative z-50">
            <div className="flex justify-between items-center px-2 py-1">
                <div className="flex items-center gap-4">
                    <Image
                        src="/img/Logo.png"
                        alt="Logo"
                        width={32} //TODO: Adjust text
                        height={32}
                        className="object-contain"
                    />

                    <h1 className="font-bebas text-2xl tracking-widest text-[#F8F9FA] uppercase opacity-90">
                        Gerald Corrales
                    </h1>
                </div>

                <div className="font-mono text-xl tracking-tighter text-[#F8F9FA]/80">
                    <Clock />
                </div>
            </div>
            <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </header>
    );
};
