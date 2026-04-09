"use client";

import { Clock } from "@/components/dashboard/Clock";
import { motion } from "framer-motion";
import { MouseLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="ps5-welcome" />

            <main className="relative z-10 ps5-safe-area min-h-screen flex flex-col">
                <header className="flex justify-end items-center p-6 mb-2">
                    <Clock />
                </header>

                <div className="grow flex flex-col items-center justify-start text-center mt-4">
                    <h1 className="text-6xl md:text-7xl font-bebas uppercase tracking-wider">
                        Welcome to My Portfolio
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex flex-col items-center justify-center mt-6 gap-6"
                    >
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-white/10 flex items-center justify-center overflow-hidden group">
                            <div className="absolute inset-2 rounded-full border border-white/5 z-10 pointer-events-none" />
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Link href={"/home"}>
                                    <Image
                                        src="/img/Profile.jpeg"
                                        alt="Profile image"
                                        fill
                                        className="rounded-full object-cover p-2 transition-all duration-700 ease-out scale-[1.8] object-top group-hover:scale-[1.9]"
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        <h2 className="text-2xl font-mono tracking-[0.3em] uppercase">
                            G-Tech Solutions CR
                        </h2>
                        <p className="font-mono text-[15px] text-[#F8F9FA]/60">
                            Gerald Corrales
                        </p>
                    </motion.div>
                </div>

                <div className="flex justify-end items-center p-6 mb-2">
                    <MouseLeft size={20} className="text-ps5-accent" />
                    <span className="font-mono text-sm uppercase tracking-widest">
                        Select
                    </span>
                </div>
            </main>
        </div>
    );
}
