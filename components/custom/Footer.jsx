import React from 'react'
import { Input } from '../ui/input'

const Footer = () => {
  return (

    <div className="bg-black text-white py-14 px-5">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-10">

        <div className="">
          <h2 className="font-semibold text-lg mb-2">Exclusive</h2>
          <h3 className="text-sm mb-2">Subscribe</h3>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <Input className="w-full max-w-xs px-4 py-2 text-gray-700 bg-white rounded-md focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your email" />
          <button className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Subscribe</button>
        </div>


        <div>
          <h2 className="font-semibold text-lg mb-4">Support</h2>
          <p className="text-sm mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>


        <div>
          <h2 className="font-semibold text-lg mb-4">Account</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-blue-400">My Account</a></li>
            <li><a href="#" className="text-sm hover:text-blue-400">Login / Register</a></li>
            <li><a href="#" className="text-sm hover:text-blue-400">Cart</a></li>
            <li><a href="#" className="text-sm hover:text-blue-400">Wishlist</a></li>
            <li><a href="#" className="text-sm hover:text-blue-400">Shop</a></li>
          </ul>
        </div>


        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="text-sm hover:text-blue-400">Terms of Use</a></li>
            <li><a href="#" className="text-sm hover:text-blue-400">FAQ</a></li>
            <li><a href="#" className="text-sm hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">Download App</h2>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">App Store</button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">Google Play</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Footer