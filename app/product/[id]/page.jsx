import ImageGallery from '@/components/productDetails/ImageGallery'
import ProductId from '@/components/productDetails/ProductId'
import React from 'react'

const page = async({params}) => {

  const slug = (await params).id;
  
    const res = await fetch(`${process.env.DB_HOST}/api/product/${slug}`);
    const product = await res.json();
  
  
  // console.log(product);
  return (
    <div className='my-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <ImageGallery image={product}/>
        </div>
        <div>
          
          <ProductId product = {product}/>
        </div>
      </div>
      
    </div>
  )
}

export default page