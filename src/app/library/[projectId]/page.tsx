"use client";

import { useParams, useRouter } from "next/navigation";
import { checkpointLogs } from "@/constants/projects/checkpoint";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/dashboard/Header";
import { TrophyStat } from "@/components/library/TrophyStat";
import { TrophyCard } from "@/components/library/TrophyCard";
import { projectsData } from "@/constants/projects/projects";
import { useState } from "react";
import { TrophyDetailModal } from "@/components/dashboard/TrophyDetailModal";

const mainBoxShadow = "0px 20px 50px rgba(0, 0, 0, 0.7)";

export default function ProjectPage() {
    const router = useRouter();
    const params = useParams();

    //*Check if project exists
    const projectId = params.projectId as string;
    const project = projectsData[projectId];

    if (!project) return null;

    const [selectedTrophy, setSelectedTrophy] = useState<any>(null);

    const principalTrophy = checkpointLogs[0];
    const secondaryTrophies = checkpointLogs.slice(1);

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black font-sans">
            <div className="ps5-welcome opacity-30" />
            <main className="flex flex-col relative z-10 h-full w-full no-scrollbar px-12 py-4 max-w-7xl mx-auto">
                <Header />
                {/*Main Container*/}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        boxShadow: mainBoxShadow,
                        borderImage:
                            "linear-gradient(to bottom, #FF4500, #333333) 1",
                        borderStyle: "solid",
                        borderWidth: "1px",
                    }}
                    className="flex-1 mt-8 w-full bg-[#0a0a0a]/95 rounded-sm p-10 overflow-y-auto no-scrollbar"
                >
                    {/*Title*/}
                    <h1 className="font-bebas text-4xl tracking-tighter text-[#F8F9FA] uppercase mb-8">
                        {project.title}
                    </h1>
                    {/*Description*/}
                    <section className="ps5-card p-6 rounded-sm border border-white/5 mb-10">
                        <h3 className="text-lg font-bold font-mono mb-4 text-gray-100 uppercase tracking-widest">
                            Project Description:
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-sans opacity-90">
                            {project.description}
                        </p>
                    </section>

                    {/*Trophy Room Header*/}
                    <section>
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                            <h2 className="font-bebas text-2xl tracking-widest text-white uppercase">
                                Trophy Room: {projectId}
                            </h2>
                            {/*Stats*/}
                            <div className="flex gap-4 items-center bg-[#161616] px-4 py-2 rounded-full border border-white/5">
                                <TrophyStat count={1} color="#A5E1FF" />
                                <TrophyStat count={4} color="#FFD700" />
                                <TrophyStat count={4} color="#C0C0C0" />
                                <TrophyStat count={3} color="#CD7F32" />
                            </div>
                        </div>
                        {/*Trophy List*/}
                        <div className="flex flex-col gap-4">
                            {/*Principal Trophy*/}
                            <TrophyCard
                                trophy={project.logs[0]}
                                isMaster={true}
                                onOpen={() =>
                                    setSelectedTrophy(project.logs[0])
                                }
                            />
                            {/*Secondary Trophies*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {secondaryTrophies.map((trophy, index) => (
                                    <TrophyCard
                                        key={trophy.id}
                                        trophy={trophy}
                                        onOpen={() => setSelectedTrophy(trophy)}
                                    />
                                ))}
                            </div>
                            {/*Modal*/}
                            <AnimatePresence>
                                {selectedTrophy && (
                                    <TrophyDetailModal
                                        trophy={selectedTrophy}
                                        onClose={() => setSelectedTrophy(null)}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </section>
                </motion.div>
                <div className="h-6 shrink-0" />
            </main>
        </div>
    );
}
