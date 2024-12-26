import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
const useCart = create(
    persist((set) => ({
        cart: [],
        addCart: (item) => set((state) => {
            const exist = state.cart.find((cartItem) => cartItem.id === item.id);
            if (exist) {
                return {
                    cart: state.cart.map((product) => (product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product))
                }
            }
            else {
                return {
                    cart: [...state.cart, item]
                }
            }
        }),
        updateCart: (item) => set((state) => {
            return {
                cart: state.cart.map((product) => (
                    product.id === item.id ? { ...product, quantity: item.quantity } : product
                ))
            }
        }),
        deleteCart: (i) => set((state) => {
            return {
                cart: state.cart.filter((product) => product.id !== i)
            }
        })
    })

    ), {
    name: 'Cart-storage',
    storage: createJSONStorage(() => localStorage),
}
)

export default useCart;