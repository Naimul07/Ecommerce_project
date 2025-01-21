'use client';

import { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import useWishlist from '@/store/wishlistStore';

const WishlistIcon = () => {
    const cartItems = useWishlist((state) => state.wishlist);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(cartItems);
    }, [cartItems]);

    return (
        <div>
            <div className="relative">
                <span className="absolute -top-3 left-6 transform -translate-x-1/2 text-xs text-white font-bold bg-red-600 p-1 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {cart.length}
                </span>
                <FaRegHeart size={20} />
            </div>
        </div>
    );
};

export default WishlistIcon;
