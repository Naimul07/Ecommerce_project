import React from 'react'

const Productloader = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-10 mt-8'>
            {
              Array(4).fill(0).map((_, index) => (
                <div key={index} className='group relative'>
                  <div className='bg-gray-200 rounded-md w-[250px] h-[250px] animate-pulse'></div>
                  <div className='mt-2 flex justify-between'>
                    <div className='bg-gray-200 h-4 w-1/2 rounded-md animate-pulse'></div>
                    <div className='bg-gray-200 h-4 w-1/4 rounded-md animate-pulse'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <div className='bg-gray-200 h-6 w-24 rounded-md animate-pulse'></div>
                    <div className='bg-gray-200 h-6 w-6 rounded-full animate-pulse'></div>
                  </div>
                </div>
              ))
            }
        </div>
    )
}

export default Productloader