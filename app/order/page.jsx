'use client';
import { Input } from '@/components/ui/input';
import useCart from '@/store/cartStore';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  const cart = useCart((state) => state.cart);
  return (
    <div className='pt-14 container mx-auto'>
      <div className='flex items-center justify-center pb-14 md:shadow-md md:rounded-lg'>
        <div className='bg-white rounded-lg p-3 w-full md:w-3/5 '>
          <h2 className='text-xl font-semibold mb-6 text-center'>Shipping Details</h2>
          <form action="" className='space-y-4'>
            <div>
              <label htmlFor='street-address' className='block text-sm font-medium text-gray-700 mb-1'>
                Street Address
              </label>
              <Input id='street-address' type='text' placeholder='123 Main Street' className='' />
            </div>
            <div>
              <label htmlFor='village' className='block text-sm font-medium text-gray-700 mb-1'>
                Village
              </label>
              <Input id='village' type='text' placeholder='Village Name' className='' />
            </div>
            <div>
              <label htmlFor='city' className='block text-sm font-medium text-gray-700 mb-1'>
                City
              </label>
              <Input id='city' type='text' placeholder='City Name' className='' />
            </div>
            <div>
              <label htmlFor='Country' className='block text-sm font-medium text-gray-700 mb-1'>
                Country
              </label>
              <Input id='Country' type='text' placeholder='Country' className='' />
            </div>
            <div>
              <label htmlFor='phone-number' className='block text-sm font-medium text-gray-700 mb-1'>
                Phone Number
              </label>
              <Input id='phone-number' type='text' placeholder='(123) 456-7890' className='' />
            </div>

            <div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'>
                Submit
              </button>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default Page;
