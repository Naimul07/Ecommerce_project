import Image from 'next/image'
import React from 'react'

const ImageGallery = ({ image }) => {
    return (
        <div>
            <div className='flex space-x-8 items-center'>
                <div className='flex flex-col justify-between '>
                    <div className=" rounded-md p-1 cursor-pointer">
                        <Image src='/image6.jpg' width={80} height={80} className='rounded-md' alt='image' />
                    </div>

                    <div className=" rounded-md p-1 cursor-pointer">
                        <Image src='/image6.jpg' width={80} height={80} className='rounded-md' alt='image' />
                    </div>

                    <div className=" rounded-md p-1 cursor-pointer">
                        <Image src='/image6.jpg' width={80} height={80} className='rounded-md' alt='image'/>
                    </div>

                    <div className=" rounded-md p-1 cursor-pointer">
                        <Image src='/image6.jpg' width={80} height={80} className='rounded-md' alt='image'/>
                    </div>

                </div>

                <div className='flex items-center justify-center'>
                    <Image src='/image6.jpg' width={400} height={300} className='rounded-md' alt='image'/>

                </div>
            </div>
        </div>
    )
}

export default ImageGallery