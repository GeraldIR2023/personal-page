"use client";

import { useCallback, useEffect } from "react";
import { Trophy } from "@/constants/projects/checkpoint";
import { motion } from "framer-motion";
import { Star, X } from "lucide-react";
import Image from "next/image";

const modalShadow = "0px 30px 60px rgba(0, 0, 0, 0.6)";

export const TrophyDetailModal = ({
    trophy,
    onClose,
}: {
    trophy: Trophy;
    onClose: () => void;
}) => {
    //^Close with Esc
    const handleEsc = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose],
    );

    useEffect(() => {
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [handleEsc]);

    return (
        //^Semi-transparent overlay with blur
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 backdrop-blur-sm p-6"
            onClick={onClose}
        >
            {/*Modal Container*/}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-[#0d0d0d] w-full max-w-5xl rounded-sm overflow-hidden flex gap-12 shadow-2xl p-12"
                style={{
                    boxShadow: modalShadow,
                    borderImage:
                        "linear-gradient(to bottom, #FF4500, #333333) 1",
                    borderStyle: "solid",
                    borderWidth: "1px",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/*Close Button*/}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
                {/*Trophy Image*/}
                <div className="w-1/3 flex flex-col items-start justify-start shrink-0">
                    <div className="w-full aspect-square relative bg-[#1a1a1a] rounded-sm overflow-hidden border border-white/5 shadow-inner p-8 flex items-center justify-center">
                        <Image
                            src={trophy.image}
                            alt={trophy.title}
                            fill
                            className="object-contain opacity-100 transition-opacity duration-300"
                            priority
                        />
                    </div>
                </div>
                {/*Content*/}
                <div className="flex-1 flex flex-col justify-between py-2">
                    {/*Principal Container*/}
                    <div>
                        <div className="flex items-center gap-3 mb-2 pb-2 border-b border-white/5 w-fit">
                            <Star
                                size={18}
                                fill={trophy.color}
                                stroke="none"
                                className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                            />

                            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 font-bold">
                                {trophy.type}
                                Trophy
                            </span>
                        </div>
                        {/*Title*/}
                        <h2 className="text-4xl font-bold uppercase tracking-tight text-white mb-8 leading-[1.1]">
                            {trophy.title}
                        </h2>
                        {/*Requirement*/}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs font-mono text-[#0072FF] uppercase tracking-widest mb-2.5 font-bold">
                                    Requirement
                                </h3>
                                <p className="text-gray-200 text-sm font-medium leading-relaxed">
                                    {trophy.requirement}
                                </p>
                            </div>
                            {/*Description*/}
                            <div>
                                <h3 className="text-xs font-mono text-[#0072FF] uppercase tracking-widest mb-2.5 font-bold">
                                    Description
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed italic opacity-90">
                                    "{trophy.description}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer*/}
                <div className="flex items-center justify-between border-t border-white/5 pt-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Star size={24} fill={trophy.color} stroke="none" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase font-mono">
                                Status
                            </span>
                            <span className="text-sm font-bold text-white uppercase tracking-widest">
                                Unlocked
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: `${trophy.color}20`,
                            borderColor: trophy.color,
                        }}
                        className="px-6 py-2 border rounded-full"
                    >
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: trophy.color }}
                        >
                            Completed
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
