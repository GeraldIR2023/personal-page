"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export const Clock = () => {
    const [time, setTime] = useState<String>("");

    useEffect(() => {
        //* Set time format
        const updateTime = () => {
            setTime(DateTime.now().toFormat("HH:mm"));
        };

        updateTime();
        //^ Update time every 30s
        const timer = setInterval(updateTime, 1000 * 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            suppressHydrationWarning
            className="text-white font-mono text-[24px] tracking-widest"
        >
            {" "}
            {time || "00:00"}
        </div>
    );
};
