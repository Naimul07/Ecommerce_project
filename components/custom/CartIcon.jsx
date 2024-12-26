'use client'
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "@/store/cartStore";

const CartIcon = () => {
    const cart = useCart((state) => state.cart);

    return (
        <>
            <div className="relative">
                <span className="absolute -top-3 left-6 transform -translate-x-1/2 text-xs text-white font-bold bg-red-600 p-1 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {cart.length}
                </span>
                <MdOutlineShoppingCart size={25} className="text-gray-800" />
            </div>



        </>
    )
}

export default CartIcon