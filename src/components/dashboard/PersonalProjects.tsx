"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const cardShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";

const techStack = [
    { id: "nestjs", name: "NestJS", logo: "/img/techArsenal/NestJs.svg" },
    {
        id: "postgresql",
        name: "PostgreSQL",
        logo: "/img/techArsenal/Postgresql.svg",
    },
    { id: "react", name: "React", logo: "/img/techArsenal/React.svg" },
    { id: "nextjs", name: "Next Js", logo: "/img/techArsenal/NextJs.svg" },
    {
        id: "typescript",
        name: "Type Script",
        logo: "/img/techArsenal/TypeScript.svg",
    },
];

const Trophies = ({ color, count }: { color: string; count: string }) => (
    <div className="flex flex-col items-center gap-1">
        <Star
            size={26}
            fill={color}
            stroke="none"
            className="filter drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]"
        />
        <span className="text-base font-bold text-white leading-none">
            {count}
        </span>
    </div>
);

export const PersonalProjects = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bebas text-xl tracking-[0.15em] text-[#f8f9fa] uppercase opacity-80">
                Personal Projects
            </h2>

            {/*Main Container*/}
            <div className="grid grid-cols-12 gap-3 w-full max-w-175">
                {/*Tech Arsenal & Playlist*/}
                <div className="col-span-7 flex flex-col gap-3">
                    {/*Tech Arsenal*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) p-6 rounded-[3px] border border-white/10 flex flex-col gap-4 min-h-0 py-4 justify-center"
                    >
                        <span className="text-[12px] font-mono text-gray-400 uppercase tracking-[0.2em] opacity-70">
                            Tech Arsenal
                        </span>
                        <div className="flex gap-4 items-center">
                            {techStack.map((tech) => (
                                <motion.div
                                    key={tech.id}
                                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-3 cursor-pointer group transition-all duration-300"
                                    whileHover={{
                                        scale: 1.1,
                                        borderColor: "var(--ps5-accent)",
                                        boxShadow:
                                            "0 0 25px var(--ps5-accent-glow)",
                                    }}
                                    title={tech.name}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={tech.logo}
                                            alt={`${tech.name} Logo`}
                                            fill
                                            className="object-contain transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                                            sizes="56px"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/*Playlist*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) px-6 py-3 rounded-[3px] border border-white/5 flex justify-between items-center overflow-hidden"
                    >
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1 opacity-70">
                                Programming Playlist
                            </span>
                            <h3 className="text-2xl font-bold text-(--ps5-text) leading-tight">
                                Even In Arcadia
                            </h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-0.5">
                                Sleep Token
                            </p>
                        </div>
                        <div className="relative w-20 h-20 shrink-0 rounded-xs overflow-hidden shadow-lg border border-white/10">
                            <Image
                                src="/img/playlist/EvenInArcadia.jpg"
                                alt="Even In Arcadia Cover"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/*Trophies Card*/}
                <div className="col-span-5 h-full">
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/10 h-full flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest opacity-70">
                                Trophies
                            </span>
                            <span className="text-[10px] font-mono text-gray-400 opacity-70 uppercase tracking-tighter">
                                Total: 12
                            </span>
                        </div>
                        {/*Stars*/}
                        <div className="flex justify-around items-end py-2">
                            <Trophies color="#A5E1FF" count="1" />
                            <Trophies color="#FFD700" count="4" />
                            <Trophies color="#C0C0C0" count="4" />
                            <Trophies color="#CD7F32" count="3" />
                            {/* Bronce */}
                        </div>

                        <div className="w-full space-y-1.5">
                            <div className="flex justify-between text-[8px] text-gray-400 uppercase font-bold tracking-tighter">
                                <span>Completed</span>
                                <span className="text-white">100%</span>
                            </div>
                            <div className="h-0.75 w-full bg-black/40 relative overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut",
                                    }}
                                    className="h-full bg-(--ps5-orange)"
                                    style={{
                                        boxShadow: "0 0 8px var(--ps5-orange)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
