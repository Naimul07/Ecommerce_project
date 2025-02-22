'use client'

import { useEffect, useState } from "react";

const Flashsale = () => {
    const [time, setTime] = useState(12000); // Default initial time
    const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

    useEffect(() => {
        // Set isMounted to true when component mounts
        setIsMounted(true);

        if (typeof window !== 'undefined') {
            // Get saved time from localStorage
            const savedTime = localStorage.getItem('flashsaleTime');
            if (savedTime !== null) {
                setTime(parseInt(savedTime, 10));
            }
        }
    }, []);

    useEffect(() => {
        if (!isMounted) return; // Prevent running before component mounts

        // Save the time to localStorage whenever it changes
        if (typeof window !== 'undefined') {
            localStorage.setItem('flashsaleTime', time);
        }

        const intervalID = setInterval(() => {
            setTime((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    clearInterval(intervalID); // Stop the countdown when it reaches 0
                    return prev;
                }
            });
        }, 1000);

        return () => clearInterval(intervalID); // Cleanup on unmount
    }, [time, isMounted]);

    return (
        <div className="px-4 sm:px-0">
            <div className="flex justify-between sm:justify-start sm:gap-24">
                <div className="flex flex-col">
                    <div className="text-red-600 font-bold text-xs sm:text-lg border-s-8 border-red-600">
                        <span className="px-2">Today's</span>
                    </div>
                    <div className="font-bold text-xs sm:text-2xl">Flash sales</div>
                </div>
                <div className="flex gap-1 sm:gap-4">
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-xs sm:text-sm">Hours</h2>
                        <div className="font-bold text-xs sm:text-2xl">{String(Math.floor(time / 3600)).padStart(2, '0')}</div>
                    </div>

                    <div className="font-bold sm:text-3xl text-red-600">:</div>
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-xs sm:text-sm">Minutes</h2>
                        <div className="font-bold text-xs sm:text-2xl">{String(Math.floor((time % 3600) / 60)).padStart(2, '0')}</div>
                    </div>

                    <div className="font-bold sm:text-3xl text-red-600">:</div>
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-xs sm:text-sm">Seconds</h2>
                        <div className="font-bold text-xs sm:text-2xl">{String(time % 60).padStart(2, '0')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashsale;
