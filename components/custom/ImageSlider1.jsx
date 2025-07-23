'use client'
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ImageSlider1 = () => {
  const [current, setCurrent] = useState(1);
  const images = [
    '/cover1.jpg',
    '/cover2.jpg',
    '/cover4.jpg'
  ]
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src1, id) => (
          <div className="min-w-full h-full lg:h-[400px]" key={id}>
            <img src={src1} alt={`slide-${id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 w-full flex justify-between px-4 -translate-y-1/2 z-10">
        <button onClick={prevSlide} className="text-white font-extrabold text-xl"><IoIosArrowBack /></button>
        <button onClick={nextSlide} className="text-white font-extrabold text-xl"><IoIosArrowForward /></button>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-3 flex gap-2 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${current === idx ? 'bg-white' : 'bg-gray-400'
              }`}
          ></div>
        ))}
      </div>
    </div>

  )
}

export default ImageSlider1