import { checkpointLogs } from "./checkpoint";

export const projectsData: Record<string, any> = {
    checkpoint: {
        title: "CheckPoint | VIDEO GAME E-COMMERCE",
        description: [
            "A fully custom e-commerce platform inspired by the classic Crash Bandicoot aesthetic...",
            "I focused on creating a seamless user experience—from a dynamic product catalog...",
        ],
        stats: { platinum: 1, gold: 4, silver: 4, bronze: 3 },
        logs: checkpointLogs,
    },
};
