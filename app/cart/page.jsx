// pages/cart.js
'use client'
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/monitor.jpg" },
    { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: "/gamepad.jpg" },
  ]);
  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-10 px-4 lg:px-0">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-4">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10).keys()].map((_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-6">
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <button className="border px-4 py-2 text-gray-600 hover:bg-gray-200 rounded">
            Return To Shop
          </button>
          <button className="border px-4 py-2 text-gray-600 hover:bg-gray-200 rounded">
            Update Cart
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border px-4 py-2 rounded w-40"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Apply Coupon
          </button>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <div className="border p-6 rounded-lg w-full lg:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-700">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
