"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const TrophyCard = ({ trophy, router, isMaster, index = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: isMaster ? 0.2 : 0.3 + index * 0.05 }}
        onClick={() => router.push(`/library/checkpoint/${trophy.id}`)}
        className={`
            group flex items-center justify-between bg-[#121212] p-5 rounded-sm border 
            transition-all duration-300 cursor-pointer
            ${
                isMaster
                    ? "border-[#ff4b2b]/30 bg-[#181818] hover:bg-[#202020]"
                    : "border-white/5 hover:border-white/20 hover:bg-[#1a1a1a]"
            }
        `}
    >
        <div className="flex items-center gap-5">
            <div className="relative">
                <div
                    className="absolute inset-0 blur-md opacity-20"
                    style={{ backgroundColor: trophy.color }}
                />
                <Star
                    size={isMaster ? 32 : 24}
                    fill={trophy.color}
                    stroke="none"
                    className="relative z-10"
                />
            </div>
            <div className="flex flex-col">
                <h4
                    className={`font-bold uppercase tracking-wider text-gray-100 group-hover:text-white 
                    ${isMaster ? "text-sm" : "text-[13px]"}`}
                >
                    {trophy.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-mono italic mt-0.5 line-clamp-1">
                    {trophy.requirement}
                </p>
            </div>
        </div>
    </motion.div>
);
