import React from 'react'
import Sidebar from './Sidebar'
import Imageslider from './Imageslider'

const Hero = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-4 mt-4 gap-2'>
                <div className='hidden md:block md:col-span-1 '>
                    <Sidebar/>
                    
                </div>
                <div className='col-span-4 md:col-span-3'>
                    <Imageslider/>
                </div>
            </div>
        </>
    )
}

export default Hero