"use client";

import { Header } from "@/components/dashboard/Header";
import { AboutMe } from "@/components/profile/AboutMeSection";
import { motion } from "framer-motion";

const mainBoxShadow = "0px 20px 50px rgba(0, 0, 0, 0.7)";

export default function ProfilePage() {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black font-sans">
            <main className="relative z-10 h-full w-full flex flex-col no-scrollbar px-12 py-4 max-w-7xl mx-auto">
                <Header />
                {/*Main Container*/}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        height: "calc(100vh - 140px)",
                        boxShadow: mainBoxShadow,
                        borderImage:
                            "linear-gradient(to bottom, #FF4500, #333333) 1",
                        borderStyle: "solid",
                        borderWidth: "1px",
                    }}
                    className="mt-8 w-full bg-[#0a0a0a]/95 rounded-sm p-10 overflow-hidden flex flex-col"
                >
                    {/*Section Title*/}
                    <div className="mb-6 shrink-0">
                        <h1 className="font-bebas text-4xl tracking-tighter text-[#F8F9FA] uppercase">
                            User Profile & Settings
                        </h1>
                        <div className="h-px w-32 bg-[#FF4500] mt-2" />
                    </div>

                    <div className="flex-1 min-h-0">
                        <AboutMe />
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
