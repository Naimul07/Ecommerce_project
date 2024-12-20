'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Imageslider = () => {
  const slides = [
    {
      id: 1,
      image: '/image4.jpg', // Replace with your image path
      title: 'iPhone 14 Series',
      subtitle: 'Up to 10% off Voucher',
      link: '#',
    },
    {
      id: 2,
      image: '/image5.jpg',
      title: 'Samsung Galaxy S23',
      subtitle: 'Grab the Best Deals',
      link: '#',
    },
    {
      id: 3,
      image: '/image3.jpg',
      title: 'Google Pixel 7 Pro',
      subtitle: 'Up to 15% off',
      link: '#',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);
  function prevSlide() {
    setCurrentIndex((prev) => (prev - 1+slides.length) % slides.length);
  }
  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  }
  return (
    <>
      <div className="">
        <div className="relative overflow-hidden">
          {
            slides.map((slide, index) => (
              <div className={`relative ${currentIndex === index ? "block" : "hidden"}`} key={index}>
                <div className="h-[360px] sm:h-[480px] md:h-[480px] lg:h-[360px] bg-black text-white flex items-center justify-center" style={
                  {
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                }>
                  
                  <div className="text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold">{slide.title}</h2>
                    <p className="text-lg md:text-xl">
                      {slide.subtitle}
                    </p>
                    <Link href='' className="inline-block mt-4 text-white border-b-2 border-white hover:text-gray-300 transition">
                      Shop Now →
                    </Link>
                  </div>
                </div>
              </div>

            ))
          }

          {/* arrow button */}

          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100">
            <AiOutlineArrowLeft size={24}/>
          </button>


          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100">
            <AiOutlineArrowRight size={24}/>
          </button>

          <div className="absolute bottom-4 flex gap-1 left-1/2 transform -translate-x-1/2">
            {slides.map((_,index)=>(
              <div key={index} onClick={()=>setCurrentIndex(index)} className={`w-3 h-3 cursor-pointer rounded-full ${ index === currentIndex ?'bg-red-500':'bg-gray-300'}`}>

              </div>
            ))}
          </div>



        </div>
      </div>
    </>
  )
}

export default Imageslider