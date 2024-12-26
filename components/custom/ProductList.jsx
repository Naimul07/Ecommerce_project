'use client'
import useCart from '@/store/cartStore';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
const ProductList = ({ products }) => {
    // console.log(products);
    const addToCart = useCart((state) => state.addCart);
    const cart = useCart((state) => state.cart);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    function handleCart(items) {
        const item = {
            id: items.id,
            name: items.name,
            subcategory_id: items.subcategory_id,
            price: items.price,
            description: items.description,
            quantity: 1,
        }
        addToCart(item);
        toast.success(`${item.name} added to cart successfully`,
            {
                duration: 4000,
                position: 'bottom-right',
              
            }
              
            
        );

    }
    console.log(cart);
    return (
        <>
            <div className='mt-3'>
                <div className='relative'>
                    <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-10 mt-8 max-w-5xl mx-auto'>
                        {products &&
                            products.slice(start, end).map((item, index) => (
                                <div key={index} className='group relative'>
                                    <Image
                                        src="/image6.jpg"
                                        alt={item.name}
                                        width={250}
                                        height={250}
                                        className="rounded-md"
                                    />
                                    <div className='mt-2 flex justify-between'>
                                        <p className='text-gray-700 text-sm'>{item.name}</p>
                                        <p className='text-gray-500 text-sm'>$ {item.price}</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-2'>
                                        <button onClick={() => handleCart(item)} className='rounded-md border px-2 text-sm bg-blue-400 text-white mt-2 py-1 hover:bg-blue-600'>Add to cart</button>
                                        <IoMdHeartEmpty size={24} className='hover:scale-110 transition-transform duration-150' />
                                    </div>



                                </div>
                            ))
                        }
                    </div>
                    <div className='hidden lg:block'>
                        <button  className='absolute top-1/2 bg-slate-200 rounded-full p-2 left-2 transform -translate-y-1/2'>
                            <IoArrowBackOutline size={24}/>
                        </button>
                        <button className='absolute top-1/2 bg-slate-200 rounded-full p-2 right-2 transform -translate-y-1/2'>
                            <IoArrowForwardSharp size={24}/>
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-2'>
                    <button className='bg-red-500 px-3 py-2 md:px-6 rounded-md my-4 md:my-8 text-white hover:bg-red-600 transition-transform duration-75'>View all</button>

                </div>
            </div>
        </>
    )
}

export default ProductList