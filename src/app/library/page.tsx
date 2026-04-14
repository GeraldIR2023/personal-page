"use client";

import { Header } from "@/components/dashboard/Header";
import { motion } from "framer-motion";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";

const projects = [
    {
        id: "checkpoint",
        title: "CheckPoint e-commerce",
        type: "Personal Project",
        stack: "Full Stack Development",
        image: "/img/Portfolio/Main.png",
    },
];

export default function LibraryPage() {
    const router = useRouter();
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <main className="flex flex-col relative z-10 h-full w-full no-scrollbar">
                <div className="max-w-7xl mx-auto w-full h-full px-12 py-4 flex flex-col">
                    <Header />

                    <section className="mt-12">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    onMouseEnter={() =>
                                        setHoveredId(project.id)
                                    }
                                    onMouseLeave={() => setHoveredId(null)}
                                    onClick={() =>
                                        router.push(`/library/${project.id}`)
                                    }
                                    className={`
                                        relative flex items-center gap-5 p-5 rounded-[3px] border-2 transition-all duration-300 cursor-pointer
                                        ${
                                            hoveredId === project.id
                                                ? "bg-[#1a1a1a] border-[#ff4b2b] shadow-[0_0_20px_rgba(255,75,43,0.3)] scale-[1.02]"
                                                : "bg-[#121212] border-white/5"
                                        }
                                    `}
                                >
                                    {/*Project Image*/}
                                    <div
                                        className={`relative w-24 h-24 rounded-sm overflow-hidden transition-colors border-2 
                                            ${hoveredId === project.id ? "border-[#ff4b2b]" : "border-white/10"}`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                        />
                                    </div>
                                    {/*Project Title*/}
                                    <div className="flex flex-col flex-1 gap-1">
                                        <h3
                                            className={`text-xl font-bold font-mono uppercase transition-colors 
                                            ${hoveredId === project.id ? "text-white" : "text-gray-200"}`}
                                        >
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest opacity-80">
                                                {project.type}
                                            </span>

                                            <span className="text-[#0072FF] font-bold">
                                                {project.stack}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
