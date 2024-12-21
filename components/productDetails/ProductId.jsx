'use client'

import { useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io";

const ProductId = ({ product }) => {
  // console.log(product)
  const [sizet, setSizet] = useState("");
  const [color, setColor] = useState("");
  const [count, setCount] = useState(2);

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
        <p className='text-sm text-gray-500'>{product?.description}</p>
      </div>
      <hr />
      <div>
        <div className="my-4">
          <div className="flex items-center space-x-4">
            <h4 className="text-sm font-medium ">Colours:</h4>
            <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer border"></span>
            <span className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer border"></span>
          </div>
        </div>
      </div>
      <div>
        <div className='my-4'>

          <div className='flex items-center space-x-3 '>
            <h2 className=''>Size :</h2>
            {
              ['sm', 'md', 'lg', 'xl', 'xxl'].map((size, index) => (

                <button key={index} className={`border-2 px-3 rounded-md  hover:bg-red-400 hover:border-white hover:text-white ${sizet === size ? 'bg-red-500 text-white' : ''}`} onClick={() => setSizet(size)}>{size}</button>


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
        <div className="mx-4">
          <button className="border px-2 py-1 text-white bg-red-500 hover:bg-red-700">Add to cart</button>
        </div>
        <div><IoMdHeartEmpty size={28} /> </div>
      </div>
    </div>

  )
}

export default ProductId