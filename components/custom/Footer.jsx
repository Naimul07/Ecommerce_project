import React from 'react'
import { Input } from '../ui/input'
import Link from 'next/link'

const Footer = () => {
  return (

    <div className="bg-slate-600 text-white py-14 px-5 flex items-center justify-center">
      @copyright reserved to  <Link href="https://www.linkedin.com/in/root07/" target="_blank" rel="noopener noreferrer" className='mx-2 text-blue-200 underline'> Naimul </Link>
    </div>


  )
}

export default Footer