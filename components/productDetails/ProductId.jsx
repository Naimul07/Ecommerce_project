import React from 'react'

const ProductId = ({product}) => {
  console.log(product)
  return (
    <div>
      <div>
        <h2 className='mb'>{product.name}</h2>
        <h3>{product.stock_quantity > 0 ? 'In Stock':'Stocked out'}</h3>
      </div>
      <div>
        <p>{product?.description}</p>
      </div>
      <hr />
      <div>
      <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Colours:</h4>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer border"></span>
              <span className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer border"></span>
            </div>
          </div>
      </div>
      <div>
        size
      </div>
      <div>
        quantity<div>Buy Now</div>
        <div>heart</div>
      </div>
      

    </div>
  )
}

export default ProductId