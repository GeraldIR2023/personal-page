"use client";
import { AboutMe } from "@/components/dashboard/AboutMe";
import { Header } from "@/components/dashboard/Header";
import { PersonalProjects } from "@/components/dashboard/PersonalProjects";
import { ProfessionalBackground } from "@/components/dashboard/ProfessionalBackground";
import { ScreenCard } from "@/components/dashboard/ScreenCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

//^Card's Data
const sections = [
    { id: "library", title: "Library" },
    { id: "profile", title: "Profile" },
    { id: "experience", title: "Experience" },
];

export default function Home() {
    const [focusedCard, setFocusedCard] = useState<string>("library");
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div className="ps5-welcome" />

            <main className="relative z-10 h-full w-full flex flex-col no-scrollbar">
                <div className="max-w-7xl mx-auto w-full h-full px-12 py-4 flex flex-col">
                    <Header />
                    <section className="mt-4 flex items-start shrink-0">
                        {sections.map((s) => (
                            <ScreenCard
                                key={s.id}
                                {...s}
                                isFocused={focusedCard === s.id}
                                onHover={setFocusedCard}
                            />
                        ))}
                    </section>
                    <div className="flex-1 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {focusedCard === "library" ? (
                                <motion.div
                                    key="projects"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <PersonalProjects />
                                </motion.div>
                            ) : focusedCard === "profile" ? (
                                <motion.div
                                    key="projects"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <AboutMe />
                                </motion.div>
                            ) : (
                                focusedCard === "experience" && (
                                    <motion.div
                                        key="projects"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <ProfessionalBackground />
                                    </motion.div>
                                )
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="h-4 shrink-0" />
                </div>
            </main>
        </div>
    );
}
