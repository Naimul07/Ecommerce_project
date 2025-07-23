'use client';
import useCart from '@/store/cartStore';
import useWishlist from '@/store/wishlistStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { IoMdCart, IoMdHeartEmpty } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const ProductList = ({ products }) => {
    const addToCart = useCart((state) => state.addCart);
    const addwishlist = useWishlist((state) => state.addwishlist)
    const [start, setStart] = useState(0);
    const itemsPerPage = 4; // Show 4 items at a time
    const router = useRouter();

    const handlePrev = () => {
        setStart((prev) => (prev === 0 ? prev : prev - 1));
        // setEnd((prev) => (prev === 5 ? prev : prev - 1));
    };

    const handleNext = () => {
        setStart((prev) => (prev === 12 ? prev : prev + 1));
        // setEnd((prev) => (prev === 11 ? prev : prev + 1));
    };

    const handleCart = (item) => {
        const newItem = {
            id: item.id,
            name: item.name,
            subcategory_id: item.subcategory_id,
            price: item.price,
            description: item.description,
            quantity: 1,
        };
        addToCart(newItem);
        toast.success(`${item.name} added to cart successfully`, {
            duration: 4000,
            position: 'bottom-right',
        });
    };
    const handleWishlist = (item) => {
        const newItem = {
            id: item.id,
            name: item.name,
            subcategory_id: item.subcategory_id,
            price: item.price,
            description: item.description,
            quantity: 1,
        };
        addwishlist(newItem);
        toast.success(`${item.name} added to wishlist successfully`, {
            duration: 4000,
            position: 'bottom-right',
        });
    };
    const handleLink = (item) => {
        const queryString = new URLSearchParams(item).toString();
        router.push(`/product/${item.id}?${queryString}`);
    };

    return (
        <div className="mt-3 relative max-w-6xl mx-auto">
            {/* Sliding Container */}
            <div className='overflow-hidden px-4 md:px-0'>
                <div
                    className="flex transition-transform duration-700 ease-in-out gap-5"
                    style={{ transform: `translateX(-${start * 50}%)` }} // Moves the cards smoothly
                >
                    {products.map((item, index) => (
                        <div key={index} className="min-w-[50%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[24%] border shadow-md rounded-md px-1 py-2">
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={250}
                                    height={250}
                                    className="rounded-xl object-cover w-full h-96"
                                    onClick={() => handleLink(item)}
                                />
                            </div>

                            <div className="my-3 px-2 flex flex-row justify-between gap-1 text-sm text-gray-700 cursor-pointer" onClick={() => handleLink(item)}>
                                <p className="text-gray-700 text-sm">{item.name}</p>
                                <p className="text-gray-500 text-sm">৳ {item.price}</p>
                            </div>
                            <div className="flex justify-between items-center p-2 gap-2">
                                {/* Add to Cart Button */}
                                <button
                                    onClick={() => handleCart(item)}
                                    className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 active:scale-95 transition"
                                >
                                    <IoMdCart className="text-xs" />
                                    Add to Cart
                                </button>

                                {/* Favourite Button */}
                                <button
                                    onClick={() => handleWishlist(item)}
                                    className="flex items-center justify-center gap-1 px-4 py-2 text-xs font-medium text-blue-500 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white active:scale-95 transition"
                                >
                                    <IoMdHeartEmpty className="text-xs" />
                                    Favourite
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {/* Prev & Next Buttons */}
            <div className="">
                <button
                    className="absolute top-1/2 bg-slate-200 rounded-full p-2 left-2 transform -translate-y-1/2"
                    onClick={handlePrev}
                >
                    <IoArrowBackOutline size={24} />
                </button>
                <button
                    className="absolute top-1/2 bg-slate-200 rounded-full p-2 right-2 transform -translate-y-1/2"
                    onClick={handleNext}
                >
                    <IoArrowForwardSharp size={24} />
                </button>
            </div>
        </div>
    );
};

export default ProductList;
