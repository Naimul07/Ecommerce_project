'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

const Test = () => {
    const products = [
        // (Your products array remains unchanged)
    ];

    const [start, setStart] = useState(0);

    const handleRight = () => {
        setStart((prev) => (prev < products.length - 4 ? prev + 1 : prev));
    };

    const handleLeft = () => {
        setStart((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="pt-14">
            <div className="relative overflow-hidden">
                <div
                    className="grid grid-cols-4 gap-4 transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${start * 25}%)`, // Moves the grid smoothly
                    }}
                >
                    {products.map((product, index) => (
                        <div
                            className="col-span-1 p-4 border rounded-lg bg-white shadow-md"
                            key={product.id}
                        >
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/image6.jpg"
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="rounded"
                                />
                            </div>
                            <div className="text-center mt-2">
                                <div className="font-semibold">{product.name}</div>
                                <div className="text-gray-600">${product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex justify-center gap-10 mt-10">
                    <Button onClick={handleLeft}>Left</Button>
                    <Button onClick={handleRight}>Right</Button>
                </div>
            </div>
        </div>
    );
};

export default Test;
