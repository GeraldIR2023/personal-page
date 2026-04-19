"use client";

import { experienceData } from "@/constants/experience/Experience";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
    const jobExperience = experienceData[0];

    return (
        <div className="flex h-full w-full gap-8 overflow-hidden pt-6">
            <div className="flex-1 h-full overflow-y-auto pr-8 custom-scrollbar">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/*Header*/}
                    <div className="border-b border-white/10 pb-4 mb-8">
                        <h2 className="font-bebas text-5xl tracking-tighter text-white uppercase leading-none">
                            {jobExperience.company}
                        </h2>
                        <div className="flex justify-between items-center mt-4">
                            <span className="font-mono text-xl text-gray-400 uppercase tracking-widest">
                                {jobExperience.role}
                            </span>
                            <span className="font-mono text-xl text-white font-bold italic">
                                {jobExperience.period}
                            </span>
                        </div>
                    </div>
                    {/*Body*/}
                    <div className="space-y-8">
                        <p className="font-mono text-lg leading-relaxed text-gray-300">
                            {jobExperience.description}
                        </p>
                        <div className="space-y-6 pb-10">
                            {jobExperience.achievements.map(
                                (achievement, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 group"
                                    >
                                        <div className="h-2 w-2 bg-[#FF4500] mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                                        <p className="font-mono text-lg text-gray-400 group-hover:text-white transition-colors">
                                            {achievement}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 12px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #555;
                    border: 3px solid #0a0a0a;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #888;
                }
            `}</style>
        </div>
    );
};
