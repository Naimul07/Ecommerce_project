'use client'
import Image from 'next/image'
import { useState } from 'react';

const ImageGallery = ({ mainImage }) => {
  const getFolder = (path) => {
    return path.substring(0, path.lastIndexOf("/"));
  };

  const [main, setMain] = useState(mainImage);
  const folder = getFolder(mainImage);

  const thumbnails = [
    "image.png",
    "image copy 2.png",
    "image copy 3.png",
    "image copy.png"
  ];

  const setImage = (imgPath) => {
    setMain(imgPath);
  };

  return (
    <div>
      <div className='flex space-x-8 items-center'>
        {/* Thumbnails */}
        <div className='flex flex-col justify-between gap-2'>
          {thumbnails.map((thumb, index) => {
            const fullPath = `${folder}/${thumb}`;
            const isSelected = fullPath === main;
            return (
              <div
                key={index}
                className={`rounded-md cursor-pointer ${isSelected ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => setImage(fullPath)}
              >
                <Image
                  src={fullPath}
                  width={80}
                  height={80}
                  className='rounded-md'
                  alt={`thumb-${index}`}
                />
              </div>
            );
          })}
        </div>

        {/* Main Image */}
        <div className='flex items-center justify-center'>
          <Image
            src={main}
            width={400}
            height={300}
            className='rounded-md'
            alt='main-image'
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
