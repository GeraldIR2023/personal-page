"use client";

import { motion } from "framer-motion";

import { Star } from "lucide-react";
import Image from "next/image";
import { MemoriesCarousel } from "./MemoriesCarousel";

const cardShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";

const LegendItem = ({ color, text }: { color: string; text: string }) => (
    <div className="flex items-center gap-2.5">
        <div
            style={{ backgroundColor: color }}
            className="w-2 h-2 rounded-full shrink-0"
        />
        <span className="text-[9px] font-mono text-gray-300 uppercase">
            {text}
        </span>
    </div>
);

const RecognitionItem = ({ color, text }: { color: string; text: string }) => (
    <div className="flex items-center gap-3">
        <Star size={24} fill={color} stroke="none" className="shrink-0" />
        <span className="text-[10px] font-mono text-gray-400 uppercase leading-tight">
            {text}
        </span>
    </div>
);

export const ProfessionalBackground = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bebas text-xl tracking-[0.15em] text-[#f8f9fa] uppercase opacity-80">
                Professional Background
            </h2>

            {/*Main Container*/}
            <div className="grid grid-cols-12 gap-3 w-full max-w-300 items-stretch">
                {/*Left Column*/}
                <div className="flex flex-col col-span-3 gap-3">
                    {/*Last Job*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) flex flex-col p-5 rounded-[3px] border border-white/5 items-center min-h-45 justify-between"
                    >
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest self-start opacity-70 mb-1">
                            Last Job
                        </span>
                        <div className="relative w-20 h-20 bg-white/5 rounded-sm overflow-hidden border border-white/10 p-2 shrink-0">
                            <Image
                                src="/img/lastCompany/AcuityKP.jpg"
                                alt="Acuity KP Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-base font-bold uppercase tracking-tight mt-1">
                            Acuity KP
                        </h3>
                    </div>
                    {/*Years of Experience*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/5 flex flex-col justify-center flex-1"
                    >
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest opacity-70">
                            Years of Experience
                        </span>
                        <h2 className="text-4xl text-center font-beba tracking-widest mt-1">
                            7 Years
                        </h2>
                    </div>
                </div>
                {/*Center Column*/}
                <div className="flex flex-col col-span-4 gap-3">
                    {/*Cases*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="flex flex-col flex-1 bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/5 justify-between"
                    >
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest opacity-70">
                            Cases
                        </span>
                        <div className="flex flex-col gap-2.5 my-2">
                            <LegendItem color="#0072FF" text="Phone Calls" />
                            <LegendItem color="#FF4B2B" text="Phone Calls" />
                            <LegendItem color="#8E2DE2" text="Phone Calls" />
                        </div>
                        <div className="h-1 w-full flex rounded-full overflow-hidden bg-white/5 shrink-0">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "45%" }}
                                transition={{ duration: 1 }}
                                className="h-full bg-[#0072FF]"
                            />
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "45%" }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-[#FF4B2B]"
                            />
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "45%" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-full bg-[#8E2DE2]"
                            />
                        </div>
                    </div>
                    {/*Recognitions*/}
                    <div
                        style={{ boxShadow: cardShadow }}
                        className="bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/5 flex flex-col justify-center min-h-31.25 gap-3"
                    >
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest opacity-70">
                            Regards & Recognitions
                        </span>
                        <div className="flex flex-col gap-3">
                            <RecognitionItem
                                color="#A5E1FF"
                                text="Social Responsibility Ambassador"
                            />
                            <RecognitionItem
                                color="#FFD700"
                                text="People & Culture Ambassador"
                            />
                        </div>
                    </div>
                </div>
                {/*Right Column*/}
                <div className="col-span-5">
                    <MemoriesCarousel />
                </div>
            </div>
        </div>
    );
};
