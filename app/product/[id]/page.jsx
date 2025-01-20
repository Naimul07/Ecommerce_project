'use client';
import { useSearchParams } from 'next/navigation';
import ImageGallery from '@/components/productDetails/ImageGallery';
import ProductId from '@/components/productDetails/ProductId';
import SimilarProduct from '@/components/productDetails/SimilarProduct';

const ProductDetails = () => {
  const searchParams = useSearchParams();

  // Extract product details from the query parameters
  const product = {
    id: searchParams.get('id'),
    name: searchParams.get('name'),
    price: searchParams.get('price'),
    subcategory_id: searchParams.get('subcategory_id'),
    description: searchParams.get('description'),
    images: JSON.parse(searchParams.get('images') || '[]'),
    mainImage: searchParams.get('mainImage'),
  };

  if (!product.id) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  return (
    <div className="pt-16 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex justify-center items-center w-full mb-6">
          <ImageGallery images={product.images} mainImage={product.mainImage} />
        </div>
        <div>
          <ProductId product={product} />
        </div>
      </div>
      <div className="flex items-center justify-center my-10">
        {/* <h1 className="font-bold text-base md:text-2xl">Similar Products</h1> */}
      </div>
      {/* <div>
        <SimilarProduct id={product.subcategory_id} />
      </div> */}
    </div>
  );
};

export default ProductDetails;
