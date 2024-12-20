import Image from 'next/image'
import React from 'react'

const ImageGallery = ({ image }) => {
    return (
        <div>
            <div className='flex space-x-4'>
                <div className='flex flex-col justify-between'>
                    <div className="border-2 border-blue-500 rounded-md p-1 cursor-pointer">
                        <Image src='/image2.jpg' width={80} height={80} className='rounded-md' />
                    </div>

                    <div className="border-2 border-blue-500 rounded-md p-1 cursor-pointer">
                        <Image src='/image3.jpg' width={80} height={80} className='rounded-md' />
                    </div>

                    <div className="border-2 border-blue-500 rounded-md p-1 cursor-pointer">
                        <Image src='/image4.jpg' width={80} height={80} className='rounded-md' />
                    </div>

                    <div className="border-2 border-blue-500 rounded-md p-1 cursor-pointer">
                        <Image src='/image5.jpg' width={80} height={80} className='rounded-md' />
                    </div>

                </div>

                <div className=''>
                    <Image src='/image5.jpg' width={500} height={500} className='rounded-md' />

                </div>
            </div>
        </div>
    )
}

export default ImageGallery