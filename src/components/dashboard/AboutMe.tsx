"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BicepsFlexed, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { useState } from "react";

const cardShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";

const DailyMissions = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-4 h-4 rounded-full border-2 border-white/20 shrink-0 group-hover:border-(--ps5-orange) transition-colors relative">
            <div className="absolute inset-0.5 rounded-full bg-(--ps5-orange) opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-[12px] font-mono text-gray-300 group-hover:text-white transition-colors">
            {text}
        </span>
    </div>
);

const CircleItem = ({ name, image }: { name: string; image: string }) => (
    <div className="flex items-center justify-center group relative w-15 h-15 shrink-0 cursor-pointer">
        <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 transition-all duration-300 z-10 group-hover:scale-110 group-hover:border-(--ps5-accent)">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>
        <div className="relative z-20 px-2 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
            <span className="text-[8px] font-mono text-center leading-tight uppercase font-bold text-white tracking-tighter block drop-shadow-md">
                {name}
            </span>
        </div>
    </div>
);

const ImageCarousel = ({ title, items }: { title: string; items: any[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const maxIndex = Math.max(0, items.length - itemsPerPage);

    const nextItem = () =>
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    const prevItem = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    return (
        <div
            style={{ boxShadow: cardShadow }}
            className="flex flex-col flex-1 bg-(--ps5-secundary-color) p-4 rounded-[3px] border border-white/5 gap-4"
        >
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest opacity-60">
                {title}
            </span>
            <div className="flex items-center gap-2 flex-1">
                <button
                    onClick={prevItem}
                    disabled={currentIndex === 0}
                    className={`shrink-0 p-1 transition-colors ${currentIndex === 0 ? "opacity-10 text-white/10" : "hover:text-white text-white/50 cursor-pointer"}`}
                >
                    <ChevronLeft size={18} />
                </button>
                <div className="flex-1 overflow-hidden px-1">
                    <motion.div
                        className="flex gap-3"
                        animate={{ x: -(currentIndex * 72) }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {items.map((item, i) => (
                            <CircleItem key={i} {...item} />
                        ))}
                    </motion.div>
                </div>
                <button
                    onClick={nextItem}
                    disabled={currentIndex === maxIndex}
                    className={`shrink-0 p-1 transition-colors ${currentIndex === maxIndex ? "opacity-10 text-white/10" : "hover:text-white text-white/50 cursor-pointer"}`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

const favoriteTeams = [
    { name: "Mercedes AMG Petronas", image: "/img/Teams/Mercedes.png" },
    { name: "Ilia Topuria", image: "/img/Teams/IliaTopuria.jpg" },
    { name: "PSG", image: "/img/Teams/PSG.png" },
    { name: "Steelers", image: "/img/Teams/Steelers.png" },
    { name: "LDA", image: "/img/Teams/LDA.png" },
    { name: "Roman Reigns", image: "/img/Teams/RomanReigns.jpg" },
];

const favoriteAlbums = [
    { name: "Even In Arcadia", image: "/img/Albums/EvenInArcadia.jpg" },
    { name: "Lateralus", image: "/img/Albums/Lateralus.jpg" },
    { name: "Skeletá", image: "/img/Albums/Skeleta.png" },
    { name: "Follow The Leader", image: "/img/Albums/FollowTheLeader.jpg" },
    { name: "Dark Matter", image: "/img/Albums/DarkMatter.png" },
    { name: "Herzeleid", image: "/img/Albums/Herzeleid.jpg" },
];

export const AboutMe = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bebas text-xl tracking-[0.15em] text-[#f8f9fa] uppercase opacity-80">
                About Me
            </h2>

            <div className="grid grid-cols-12 gap-4 w-full max-w-300 mx-auto items-stretch">
                {/*Developer WOD*/}
                <div className="col-span-3 bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/5 flex flex-col gap-3 shadow-lg">
                    <span className="text-[12px] font-mono text-gray-400 uppercase tracking-widest opacity-70">
                        Developer WOD
                    </span>
                    <div className="text-[11px] font-mono text-gray-300 space-y-4 leading-relaxed">
                        <p className="text-(--ps5-orange)">AMRAP 20:</p>
                        <p>5 Reps: Build NestJS Controllers & DTOs.</p>
                        <p>10 Reps: Define PostgreSQL Schemas (Prisma).</p>
                        <p>15 Reps: Design React UI Components.</p>
                        <p>20 Reps: Deploy Next.js Server Actions</p>
                    </div>
                </div>
                {/*Center Column*/}
                <div className="col-span-5 flex flex-col gap-4">
                    {/*Status*/}
                    <div className="flex items-center gap-3 bg-black/40 self-start px-3 py-1.5 rounded-full border border-white/10">
                        <div className="flex items-center gap-2 text-[11px] font-mono border-r border-white/20 pr-3">
                            <div className="w-4 h-4 rounded-full border border-(--ps5-orange) flex items-center justify-center p-0.5">
                                <BicepsFlexed
                                    size={10}
                                    className="fill-(--ps5-orange) stroke-none"
                                />
                            </div>
                            <span>100%</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono">
                            <div className="w-4 h-4 rounded-full border border-(--ps5-accent) flex items-center justify-center p-0.5">
                                <Zap
                                    size={10}
                                    className="fill-(--ps5-accent) stroke-none"
                                />
                            </div>
                            <span>100%</span>
                        </div>
                    </div>

                    {/*Currently Playing*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/5 flex justify-between items-center h-32"
                    >
                        <div className="flex flex-col justify-center">
                            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest opacity-60 mb-2">
                                Currently Playing
                            </span>
                            <h3 className="text-3xl font-bold tracking-tight uppercase">
                                Hollow Knight
                            </h3>
                        </div>
                        <div className="relative w-22 h-22 shrink-0 rounded-xs overflow-hidden border border-white/10 shadow-lg">
                            <Image
                                src="/img/Game/HollowKnight.jpg"
                                alt="Hollow Knitght"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    {/*Daily Missions*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/5 flex flex-col gap-4 flex-1"
                    >
                        <span className="text-[12px] font-mono text-gray-400 uppercase tracking-widest opacity-60">
                            Daily Missions
                        </span>
                        <div className="flex flex-col gap-3">
                            <DailyMissions text="CrossFit Training (60 min)" />
                            <DailyMissions text="Coding (120 min)" />
                            <DailyMissions text="Listen Rock (all day)" />
                        </div>
                    </div>
                </div>
                {/*Right Column*/}
                <div className="flex flex-col col-span-4 gap-4">
                    <ImageCarousel
                        title="Teams Followed"
                        items={favoriteTeams}
                    />
                    <ImageCarousel
                        title="Recently Played Albums"
                        items={favoriteAlbums}
                    />
                </div>
            </div>
        </div>
    );
};
