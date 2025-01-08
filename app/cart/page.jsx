'use client';
import useCart from "@/store/cartStore";
import Image from "next/image";
import { useState } from "react";
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
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const cart = useCart((state) => state.cart);
  const updateCart = useCart((state) => state.updateCart);
  const deleteCart = useCart((state) => state.deleteCart);
  const [coupon, setCoupon] = useState("");
  const totalprice = cart.reduce((total, product) => total + product.price * product.quantity, 0)

  function updateCartValue(product, value) {
    product.quantity=value;
    updateCart(product);
  }
  function handleDelete(id) {
    deleteCart(id);
    toast.success('item deleted successfully');
  }
  return (
    <div className="mt-14 container mx-auto min-h-screen">
      <div >
        <div className="border-b-2 mb-4 ">
          <table className="w-full table-fixed text-center text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2">Image</th>
                <th className="py-2">Name</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
                <th className="py-2">Delete</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((product) => (
                <tr key={product.id} className="border-b border-gray-100">

                  <td className="py-2">
                    <div className="flex items-center justify-center">
                      <Image src='/image1.jpg' alt={product.name} width={40} height={40} />
                    </div>
                  </td>

                  <td>
                    <div className="">{product.name} </div>
                  </td>


                  <td>
                    <div className="flex justify-center">
                      <Select defaultValue={product.quantity} onValueChange={(value) => updateCartValue(product, value)}>
                        <SelectTrigger className="w-14 md:w-32">
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
                    <div>${(product.price*product.quantity)}</div>

                  </td>

                  <td>
                    <div>
                      <button onClick={()=>handleDelete(product.id)}><MdDelete size={20}/></button>
                    </div>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>

        </div>

        <div className="mx-10 sm:float-right sm:w-2/5 mt-4">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <p>Subtotal : </p>
              <p>{totalprice}</p>
            </div>
            <div className="flex justify-between">
              <p>Shiping Fee : </p>
              <p>80</p>
            </div>
            <div className="flex justify-between">
              <p>Total : </p>
              <p>{totalprice + 80}</p>
            </div>
            <div className="mt-4">
              <Link href='/order'>
                <Button variant="destructive" className="w-full">
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
