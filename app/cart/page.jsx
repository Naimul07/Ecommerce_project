'use client';
import useCart from "@/store/cartStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";

const CartPage = () => {
  const cartItems = useCart((state) => state.cart);
  const [cart, setCart] = useState([]);
  const updateCart = useCart((state) => state.updateCart);
  const deleteCart = useCart((state) => state.deleteCart);
  const [coupon, setCoupon] = useState("");
  const totalprice = cart.reduce((total, product) => total + product.price * product.quantity, 0)
  const ShipingFee = 40; /* Math.floor(Math.random()*100); */
  function updateCartValue(product, value) {
    product.quantity = value;
    updateCart(product);
  }
  function handleDelete(id) {
    deleteCart(id);
    toast.success('item removed from cart');
  }
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  return (
    <div className="mt-14 container mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-4">
        <div className="mb-4 md:col-span-3">
          <h1 className="text-center font-bold text-2xl mb-2">Cart</h1>

          {cart.length < 1 && (
            <div className="flex flex-col items-center justify-center h-full rounded-lg">
              <div className="">
              <CiShoppingCart size={78}/>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-4 text-center">
                You haven't added any products to your cart yet. Browse our collection and find something you'll love!
              </p>
              <Link href="/" className="py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-800">Go to HomePage</Link>
            </div>
          )}


          {cart.length > 0 && (
            <table className="w-full table-fixed text-center text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2">Image</th>
                  {/* <th className="py-2">Name</th> */}
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id} className="border-b border-gray-300 hover:bg-slate-50 text-sm">

                    <td className="py-6">
                      <div className="flex items-center justify-center gap-6">
                        <Image src='/image6.jpg' alt={product.name} width={40} height={40} className="rounded-md" />
                        <div className="">{product.name} </div>

                      </div>
                    </td>
                    {/* <td>
                    <div className="">{product.name} </div>
                  </td> */}
                    <td>
                      <div className="flex justify-center">
                        <Select defaultValue={product.quantity} onValueChange={(value) => updateCartValue(product, value)}>
                          <SelectTrigger className="w-14 ">
                            <SelectValue placeholder="Quantity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {
                                [...Array(20)].map((_, index) => (
                                  <SelectItem value={index + 1} key={index + 1}>{index + 1}</SelectItem>
                                ))
                              }
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </td>

                    <td>
                      <div className="text-slate-500">${product.price}</div>

                    </td>
                    <td>
                      <div>${(product.price * product.quantity)}</div>

                    </td>

                    <td>
                      <div>
                        <button onClick={() => handleDelete(product.id)}><RiDeleteBin6Line size={20} /></button>
                      </div>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          )}


        </div>

        <div className="mx-10 mt-4 md:mt-0 md:col-span-2 text-sm">
          <div className="flex flex-col gap-1">
            <h1 className="text-center font-bold text-lg border-b-2 mb-4 pb-3">Summary</h1>
            <div className="flex justify-between">
              <p>Subtotal  </p>
              <p>{totalprice}</p>
            </div>
            <div className="flex justify-between">
              <p>Shiping Fee  </p>
              <p>{ShipingFee}</p>
            </div>
            <div className="flex justify-between border-b-2 pb-4">
              <p>Tax  </p>
              <p>00</p>
            </div>
            <div className="flex justify-between py-2">
              <p>Total  </p>
              <p>{totalprice + ShipingFee}</p>
            </div>
            <div className="mt-4">
              <Link href='/order'>
                <Button variant="" className="w-full">
                  CheckOut
                </Button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div >
  );
};

export default CartPage;
