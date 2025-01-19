'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCart from '@/store/cartStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Page = () => {
  const cartItems = useCart((state) => state.cart);
  const [cart, setCart] = useState([]);
  const [ad, setAd] = useState(true);
  const [details, setDetails] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const totalprice = cart.reduce((total, product) => total + product.price * product.quantity, 0)
  const ShipingFee = 40; /* Math.floor(Math.random()*100); */

  function onSubmit(data) {
    //performing data submission
    //after successful submission redirect to payment post
    setAd(false);
    setDetails(data);
  }
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  return (
    <div className='pt-14 container mx-auto mb-10 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-8'>
        <div className='md:col-span-6'>
          <div className='flex items-center justify-center pb-14'>
            <div className='bg-white rounded-lg p-6 w-full'>
              <h2 className='text-xl font-semibold mb-6 text-center'>Shipping Details</h2>
              {ad && (<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                {/* Address */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                  <div className='flex flex-col'>
                    <label htmlFor='address' className='block text-xs font-medium text-gray-800'>
                      Address
                    </label>
                    <Input
                      {...register("street", { required: "Address is required" })}
                      id='address'
                      type='text'
                      placeholder='Chalk bazar, rangpur'
                    />
                    {errors.street && <span className="text-red-500 text-xs">{errors.street.message}</span>}
                  </div>

                  {/* City */}
                  <div className='flex flex-col'>
                    <label htmlFor='city' className='block text-xs font-medium text-gray-800'>
                      City
                    </label>
                    <Input
                      {...register('city', { required: "City is required" })}
                      id='city'
                      type='text'
                      placeholder='City Name'
                    />
                    {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                  </div>
                
                  {/* Postal Code */}
                  <div className='flex flex-col'>
                    <label htmlFor='postcode' className='block text-xs font-medium text-gray-800'>
                      Postal Code
                    </label>
                    <Input
                      {...register('postcode', { required: "Postal code is required" })}
                      id='postcode'
                      type='text'
                      placeholder='1258'
                    />
                    {errors.postcode && <span className="text-red-500 text-xs">{errors.postcode.message}</span>}
                  </div>

                  {/* Country */}
                  <div className='flex flex-col'>
                    <label htmlFor='country' className='block text-xs font-medium text-gray-800'>
                      Country
                    </label>
                    <Input
                      {...register('country', { required: "Country is required" })}
                      id='country'
                      type='text'
                      placeholder='Country'
                    />
                    {errors.country && <span className="text-red-500 text-xs">{errors.country.message}</span>}
                  </div>
                </div>
                {/* Submit Button */}
                <div className='col-span-full'>
                  <Button className="w-full md:w-1/5">
                    Submit
                  </Button>
                </div>
              </form>)}
              <div>
                {!ad && (
                  <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                    <div>
                      <h1 className='font-semibold text-sm'>Address</h1>
                      <p className='text-slate-500'>{details.street}</p>
                    </div>
                    <div>
                      <h1 className='font-semibold text-sm'>City</h1>
                      <p className='text-slate-500'>{details.city}</p>
                    </div>
                    <div>
                      <h1 className='font-semibold text-sm'>Postal code</h1>
                      <p className='text-slate-500'>{details.postcode}</p>
                    </div>
                    <div>
                      <h1 className='font-semibold text-sm'>Country</h1>
                      <p className='text-slate-500'>{details.country}</p>
                    </div>

                  </div>
                )}
                {!ad && (
                  <div className='mt-4'>
                    <div>
                      <Button>Proceed to payment</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='md:col-span-2'>
          <div className='px-2'>
            <h1 className='font-bold text-lg text-center my-5'>In your Cart</h1>
            <div className="flex flex-col gap-1 text-sm text-slate-600">
              {/* <h1 className="text-center font-bold text-lg border-b-2 mb-4 pb-3">Summary</h1> */}
              <div className="flex justify-between">
                <p>Subtotal  </p>
                <p>${totalprice}</p>
              </div>
              <div className="flex justify-between">
                <p>Shiping Fee  </p>
                <p>${ShipingFee}</p>
              </div>
              <div className="flex justify-between border-b-2 pb-4">
                <p>Tax  </p>
                <p>$00</p>
              </div>
              <div className="flex justify-between py-2 pb-4 border-b text-slate-800">
                <p>Total  </p>
                <p>${totalprice + ShipingFee}</p>
              </div>
            </div>
          </div>
          <div>
            {
              cart.map((item) => (
                <div className='flex justify-between my-2 border-b p-2 items-center hover:bg-slate-100' key={item.id}>
                  <div className='border rounded-lg'>
                    <Image src="/image6.jpg" width={40} height={40} alt='image' />
                  </div>
                  <div className='text-sm'>{item.name}</div>
                  <div className='flex flex-col text-xs space-y-1 items-center'>
                    <div className='text-slate-400'>
                      {item.quantity} * ${item.price}
                    </div>
                    <div>
                      ${totalprice}

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
