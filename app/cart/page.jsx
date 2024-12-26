'use client';
import useCart from "@/store/cartStore";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const cart = useCart((state) => state.cart);
  const updateCart = useCart((state) => state.updateCart);
  const deleteCart = useCart((state) => state.deleteCart);
  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (item, quantity) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (parsedQuantity > 0) {
      item.quantity = parsedQuantity;
      updateCart(item);
    }
  };

  const handleRemoveItem = (id) => {
    deleteCart(id);
    toast.success("Item deleted successfully");
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        Your Shopping Cart
      </h1>

      {cart.length > 0 ? (
        <>
          {/* Cart Items */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="px-4 py-4 sm:px-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b py-4 space-y-4 sm:space-y-0"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/image1.jpg"
                      alt={item.name}
                      height={50}
                      width={50}
                      className="rounded-md"
                    />
                    <div>
                      <p className="text-lg font-medium text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item, e.target.value)
                      }
                      className="border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {[...Array(10).keys()].map((_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>

                    <p className="text-lg font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 flex items-center"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6">
            <div className="flex flex-col lg:w-1/2">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border rounded-md px-4 py-3 w-full text-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Apply Coupon
              </button>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 lg:w-1/3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Order Summary
              </h2>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Subtotal:</p>
                <p className="text-gray-800 font-medium">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Shipping:</p>
                <p className="text-gray-800 font-medium">Free</p>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-4">
                <p>Total:</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <button className="bg-green-500 text-white w-full py-3 mt-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Return to Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
