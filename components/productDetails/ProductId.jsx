'use client'
import { useEffect, useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import useCart from "@/store/cartStore";
import toast from "react-hot-toast";

const ProductId = ({ product }) => {
  const cart = useCart((state) => state.cart)
  const addCart = useCart((state) => state.addCart);
  const [sizet, setSizet] = useState("");
  const [color, setColor] = useState("");
  const [count, setCount] = useState(1);
  function updateStore() {
    useCart.persist.rehydrate();
  }
  useEffect(() => {
    document.addEventListener("visibilitychange", updateStore);
    window.addEventListener("focus", updateStore);

    return () => {
      document.removeEventListener("visibilitychange", updateStore);
      window.removeEventListener("focus", updateStore);
    }
  }, []);
  
  function addToCart(items) {
    const item = {
      id: items.id,
      name: items.name,
      subcategory_id: items.subcategory_id,
      price: items.price,
      description: items.description,
      quantity: count,
    }
    addCart(item);
    toast.success('item added to cart');
  }

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <div>
      <div>
        <h2 className='font-semibold first-letter:capitalize text-2xl'>{product.name}</h2>
        <h3 className={`${product.stock_quantity > 0 ? 'text-green-600 text-sm my-1 font-medium' : 'text-sm my-1 font-medium text-red-200'}`}>{product.stock_quantity > 0 ? 'In Stock' : 'Stocked out'}</h3>
        <h2 className='font-semibold text-xl text-gray-800 my-2'>$ {product.price}</h2>
      </div>
      <div className='mb-4'>
        {/* <p className='text-sm text-gray-500'>{product?.description}</p> */}
      </div>
      <hr />
      <div>
        <div className="my-6">
          <h1 className="capitalize font-semibold my-2 text-lg">product description</h1>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus dignissimos quos sequi molestias atque dolorum repellendus, quibusdam rem voluptatum, nobis eum nisi a! Voluptas adipisci fuga praesentium aliquid unde.</p>
        </div>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>More Info</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi adipisci corrupti ipsum eius recusandae, possimus veritatis maiores quasi ab doloremque laboriosam mollitia ratione distinctio nesciunt reprehenderit ducimus nihil fugiat? Quos!
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>
      <div>
        <div className='my-4'>
          <div className='flex items-center space-x-3 '>
            <h2 className=''>Size :</h2>
            {
              ['sm', 'md', 'lg', 'xl', 'xxl'].map((size, index) => (

                <button key={index} className={`border-2 border-slate-400 px-3 rounded-md text-slate-500  hover:bg-slate-500 hover:border-white hover:text-white ${sizet === size ? 'bg-slate-500 text-white' : ''}`} onClick={() => setSizet(size)}>{size}</button>


              ))
            }
          </div>
        </div>
      </div>
      <div className="my-2 flex items-center">
        <h2 className="mr-2">Quantity: </h2>
        <div className="flex items-center border rounded w-24 lg:w-32">
          <button
            className="w-1/3 text-center text-gray-600 hover:bg-gray-200 py-1"
            onClick={decrement}
          >-</button>
          <div className="w-1/3 text-center py-1 border-x">{count}</div>
          <button
            className="w-1/3 text-center hover:bg-gray-200 py-1"
            onClick={increment}
          >
            +
          </button>
        </div>

      </div>



      <div className="flex space-x-16 items-center my-10">
        <div>
          <button className="border px-4 rounded-lg py-2 text-white bg-slate-500 hover:bg-slate-700" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
        <div><IoMdHeartEmpty size={28} /> </div>
      </div>





    </div>


  )
}

export default ProductId