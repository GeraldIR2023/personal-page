"use client";

import { Star } from "lucide-react";

export const TrophyStat = ({
    count,
    color,
}: {
    count: number;
    color: string;
}) => (
    <div className="flex items-center gap-1.5">
        <Star size={14} fill={color} stroke="none" />
        <span className="font-mono text-xs text-gray-400">{count}</span>
    </div>
);
