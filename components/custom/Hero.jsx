import React from 'react'
import Sidebar from './Sidebar'
import Imageslider from './Imageslider'

const Hero = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-4'>
                <div className='hidden sm:block sm:col-span-1'>
                    <Sidebar/>
                </div>
                <div className='col-span-1 sm:col-span-3'>
                    <Imageslider/>
                </div>
            </div>
        </>
    )
}

export default Hero