"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { profileContent, profileOptions } from "@/constants/profile/AboutMe";
import { div } from "framer-motion/client";

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState("bio");

    const currentContent =
        profileContent[activeTab as keyof typeof profileContent];

    return (
        <div className="flex h-full w-full gap-12 items-start overflow-hidden">
            {/*Left Menu*/}
            <div className="flex flex-col gap-4 w-48 shrink-0 pt-2">
                {profileOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => setActiveTab(option.id)}
                        className={`text-left font-mono text-xl transition-all duration-300 ${
                            activeTab === option.id
                                ? "text-white scale-105 translate-x-2 opacity-100 font-bold"
                                : "text-gray-500 opacity-40 hover:opacity-70"
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
            {/*Right Content*/}
            <div className="flex-1 relative h-full group">
                <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="h-full overflow-y-auto no-scrollbar pr-6 pb-20 pt-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {Array.isArray(currentContent) ? (
                                <div className="flex flex-col">
                                    {currentContent.map((item, index) => {
                                        //*To know is is a Link or an Email
                                        const isLink =
                                            item.value.startsWith("http");
                                        const isEmail =
                                            item.label.toLowerCase() ===
                                            "email";

                                        return (
                                            <div
                                                key={index}
                                                className="group flex flex-col"
                                            >
                                                <div className="flex justify-between items-baseline py-5">
                                                    <span className="font-mono text-lg text-gray-400 uppercase tracking-tighter">
                                                        {item.label}
                                                    </span>
                                                    {isLink || isEmail ? (
                                                        <a
                                                            href={
                                                                isEmail
                                                                    ? `mailto:${item.value}`
                                                                    : item.value
                                                            }
                                                            target={
                                                                isLink
                                                                    ? "_blank"
                                                                    : "_self"
                                                            }
                                                            rel="noreferrer"
                                                            className="font-mono text-2xl text-[#0072FF] font-bold tracking-tight text-right hover:text-white hover:underline transition-all cursor-pointer"
                                                        >
                                                            {item.label ===
                                                            "LinkedIn"
                                                                ? "Visit Profile"
                                                                : item.label ===
                                                                    "GitHub"
                                                                  ? "View GitHub"
                                                                  : item.value}
                                                        </a>
                                                    ) : (
                                                        <span className="font-mono text-lg text-white font-bold tracking-tight text-right">
                                                            {item.value}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="h-px w-full bg-linear-to-r from-white/10 via-white/5 to-transparent" />
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                //Gallery
                                <div className="grid grid-cols-3 gap-3 auto-rows-[200px]">
                                    {currentContent.data.map((src, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            className={`relative bg-[#1a1a1a] border border-white/5 overflow-hidden rounded-sm
                                                ${index === 0 ? "row-span-2 col-span-1" : ""}
                                                ${index === 4 ? "col-span-2" : ""}
                                            `}
                                        >
                                            <Image
                                                src={src}
                                                alt="G"
                                                fill
                                                className="object-cover opacity-80"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
