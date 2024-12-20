'use client'

import { useEffect, useState } from "react"

const Flashsale = () => {
    const [time, setTime] = useState(12000);
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime((prev) => prev !== 0 ? (prev - 1) : prev);
        }, 1000);
        return () => clearInterval(intervalID);
    }, [])
    return (
        <>
            <div className="">
                <div className="flex justify-between sm:justify-start sm:gap-24">
                    <div className="flex flex-col">
                        <div className="text-red-600 font-bold text-xs sm:text-lg border-s-8 border-red-600"><span className="px-2">Todays</span></div>
                        <div className="font-bold text-xs sm:text-2xl">Flash sales</div>
                    </div>
                    <div className="flex gap-1 sm:gap-4 ">
                        <div className="flex flex-col items-center">
                            <h2 className="font-bold text-xs sm:text-sm">Hours</h2>
                            <div className="font-bold text-xs sm:text-2xl">{String(Math.floor(time / (60*60))).padStart(2, '0')}</div>

                        </div>

                        <div className="font-bold sm:text-3xl text-red-600">:</div>
                        <div className="flex flex-col items-center">
                            <h2 className="font-bold text-xs sm:text-sm">Minutes</h2>
                            <div className="font-bold text-xs sm:text-2xl">{String(Math.floor((time / 60)%60)).padStart(2, '0')}</div>

                        </div>

                        <div className="font-bold sm:text-3xl text-red-600">:</div>

                        <div className="flex flex-col items-center">
                            <h2 className="font-bold text-xs sm:text-sm">
                                Seconds
                            </h2>
                            <div className="font-bold text-xs sm:text-2xl">{String(Math.floor(time % 60)).padStart(2, '0')}</div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Flashsale