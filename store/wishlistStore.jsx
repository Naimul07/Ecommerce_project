'use client';
import { create } from "zustand";
import { createJSONStorage, persist} from 'zustand/middleware'
const useWishlist = create(
    persist((set) => ({
        wishlist: [],
        addwishlist: (item) => set((state) => {
            const exist = state.wishlist.find((wishlistItem) => wishlistItem.id === item.id);
            if (exist) {
                return {
                    wishlist: state.wishlist.map((product) => (product.id === item.id ? { ...product, quantity: product.quantity + item.quantity } : product))
                }
            }
            else {
                return {
                    wishlist: [...state.wishlist, item]
                }
            }
        }),
        updatewishlist: (item) => set((state) => {
            return {
                wishlist: state.wishlist.map((product) => (
                    product.id === item.id ? { ...product, quantity: item.quantity } : product
                ))
            }
        }),
        deletewishlist: (i) => set((state) => {
            return {
                wishlist: state.wishlist.filter((product) => product.id !== i)
            }
        })
    })

    ), {
    name: 'wishlist-storage',
    storage: createJSONStorage(() => localStorage),
}
)



export default useWishlist;