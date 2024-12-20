import Image from 'next/image';
import { IoMdHeartEmpty } from "react-icons/io";
async function post() {

  try {
    const data = await fetch(`${process.env.DB_HOST}/api/products`);
    const product = await data.json();
    return product;
  }
  catch (error) {
    return null;
  }

}


const Product = async () => {
  const product = await post();
  
  return (
    <>
      <div className='mt-3'>
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-10 mt-8'>
            {product &&
              product.slice(0,6).map((item, index) => (
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
                    <IoMdHeartEmpty size={24} className='hover:scale-110 transition-transform duration-150'/>
                  </div>



                </div>
              ))
            }

          </div>
          <div className='flex items-center justify-center'>
          <button className='bg-red-500 px-3 py-2 md:px-6 rounded-md my-4 md:my-8 text-white hover:bg-red-600 transition-transform duration-75'>View all</button>

          </div>
        </div>
      </div>


    </>
  )
}

export default Product