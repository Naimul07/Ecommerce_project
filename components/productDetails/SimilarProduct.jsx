import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";


const SimilarProduct = async ({ id }) => {
  const data = await fetch(`${process.env.DB_HOST}/api/similar-product/${id}`);
  const product = await data.json();
  return (
    <div>
      <div className='mt-3'>
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-10 mt-8 max-w-5xl mx-auto'>
            {product &&
              product.slice(0, 4).map((item, index) => (
                <div key={index} className='group relative'>
                  <Image
                    src="/image6.jpg"
                    alt={item.name}
                    width={250}
                    height={250}
                    className="rounded-md"
                  />
                  <div className='mt-2 flex justify-between'>
                    <p className='text-gray-700 text-sm'>{item.name}</p>
                    <p className='text-gray-500 text-sm'>$ {item.price}</p>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <button className='rounded-md border px-2 text-sm bg-blue-400 text-white mt-2 py-1 hover:bg-blue-600'>Add to cart</button>
                    <IoMdHeartEmpty size={24} className='hover:scale-110 transition-transform duration-150' />
                  </div>
                </div>
              ))
            }

          </div>
          <div className='flex items-center justify-center'>
            <button className='bg-slate-500 p-2 w-40 rounded-md my-10 text-white hover:bg-slate-600 transition-transform duration-75'>View all</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SimilarProduct