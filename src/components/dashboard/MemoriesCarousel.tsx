"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const totalImages = 6;
const autoPlayInterval = 5000;

const cardShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";

export const MemoriesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, autoPlayInterval);

        //^Clean timer on unmount
        return () => clearInterval(timer);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const goToPrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + totalImages) % totalImages,
        );
    };

    return (
        <div
            style={{ boxShadow: cardShadow }}
            className="flex flex-col col-span-5 h-full bg-(--ps5-secundary-color) p-5 rounded-[3px] border border-white/10 gap-5 relative group"
        >
            {/*Top Indicator Bars*/}
            <div className="flex gap-1.5 w-full shrink-0 z-20 relative">
                {[...Array(totalImages)].map((_, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                            key={index}
                            className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-white/5" />
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: isActive ? "100%" : "0%" }}
                                transition={{
                                    duration: isActive
                                        ? autoPlayInterval / 1000
                                        : 0,
                                    ease: isActive ? "linear" : "easeOut",
                                }}
                                className="absolute inset-y-0 left-0 bg-white rounded-full"
                            />
                        </div>
                    );
                })}
            </div>
            {/*Image Container*/}
            <div className="relative flex-1 w-full rounded-sm overflow-hidden group/img">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0 group-hover/img:opacity-100 transition-opacity duration-700"
                    >
                        <Image
                            src={`/img/Memories/Memory${currentIndex + 1}.jpg`}
                            alt={`Work Memory ${currentIndex + 1}`}
                            fill
                            priority
                            sizes="(max-width: 1200px) 40vw, 500px"
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10" />
            {/*Title*/}
            <div className="absolute bottom-5 left-5 flex flex-col z-20">
                <span className="text-[11px] font-mono text-(--ps5-orange) uppercase font-bold tracking-widest leading-none">
                    Gallery
                </span>
                <span className="text-2xl font-bold uppercase tracking-tight mt-1 leading-none">
                    Work Memories
                </span>
            </div>
            {/*Navigation buttons*/}
            <button
                onClick={goToPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 z-30 shadow-lg"
                aria-label="Previous Memory"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 z-30 shadow-lg"
                aria-label="Next Memory"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};
