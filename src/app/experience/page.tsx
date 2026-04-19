"use client";

import { Header } from "@/components/dashboard/Header";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { motion } from "framer-motion";

export default function ExperiencePage() {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black font-sans">
            <div className="ps5-welcome opacity-30" />
            <main className="relative z-10 h-full w-full flex flex-col px-12 py-4 max-w-7xl mx-auto">
                <Header />
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.7)",
                        borderImage:
                            "linear-gradient(to bottom, #FF4500, #333333) 1",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        height: "calc(100vh - 160px)",
                    }}
                    className="mt-8 w-full bg-[#0a0a0a]/95 rounded-sm p-12 overflow-hidden flex flex-col"
                >
                    <ExperienceSection />
                </motion.div>
            </main>
        </div>
    );
}
