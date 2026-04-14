"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface ScreenCardProps {
    id: string;
    title: string;
    isFocused: boolean;
    onHover: (id: string) => void;
}

const icons: { [key: string]: string } = {
    library: "/img/Library.png",
    profile: "/img/ProfileIcon.jpg",
    experience: "/img/Experience.jpg",
};

export const ScreenCard = ({
    id,
    title,
    isFocused,
    onHover,
}: ScreenCardProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        if (id === "library") {
            router.push("/library");
        }
    };

    return (
        <motion.div
            layout
            onClick={handleNavigation}
            className="relative flex items-start shrink-0"
            onMouseEnter={() => onHover(id)}
            style={{
                height: isFocused
                    ? "clamp(90px, 11vh, 140px)"
                    : "clamp(65px, 7vh, 100px)",
                marginRight: "12px",
            }}
        >
            <motion.div
                layout
                animate={{
                    //*Control the cards size and opacity depending on if isFocused or not
                    width: isFocused
                        ? "clamp(90px, 11vh, 140px)"
                        : "clamp(65px, 7vh, 100px)",
                    height: isFocused
                        ? "clamp(90px, 11vh, 140px)"
                        : "clamp(65px, 7vh, 100px)",
                    opacity: isFocused ? 1 : 0.7,
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className={`bg-[#2a2a2a] rounded-xs border-2 overflow-hidden relative z-20 transition-colors duration-300 ${
                    isFocused
                        ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        : "border-transparent"
                }`}
            >
                <div className="relative w-full h-full flex items-center justify-center p-1">
                    <Image
                        src={icons[id] || "/img/Library.png"}
                        alt={`${title} Icon`}
                        fill
                        className="object-contain transition-all duration-500"
                        priority={isFocused}
                    />
                    <div
                        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                            isFocused ? "opacity-0" : "opacity-100"
                        }`}
                    />
                </div>
            </motion.div>
            <AnimatePresence mode="wait">
                {isFocused && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-full bottom-0 pl-3 pointer-events-none"
                    >
                        <p
                            className="font-bebas tracking-widest text-white uppercase whitespace-nowrap leading-none"
                            style={{
                                fontSize: "clamp(1.25rem, 2.5vh, 1.875rem)",
                            }}
                        >
                            {title}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
