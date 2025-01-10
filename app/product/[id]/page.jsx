import ImageGallery from '@/components/productDetails/ImageGallery';
import ProductId from '@/components/productDetails/ProductId';
import SimilarProduct from '@/components/productDetails/SimilarProduct';


const page = async ({ params }) => {
  const slug = (await params).id;

  const res = await fetch(`${process.env.DB_HOST}/api/product/${slug}`);
  if (!res.ok) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  const product = await res.json();
  // console.log(product);
  return (
    <div className="pt-16 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ImageGallery images={product.images} mainImage={product.mainImage} />
        </div>
        <div>
          <ProductId product={product} />
        </div>
      </div>
      <div className='flex items-center justify-center my-10'>
        <h1 className='font-bold text-2xl'>Simillar Product</h1>
      </div>
      <div>
        <SimilarProduct id={product.subcategory_id} />
      </div>
    </div>
  );
};

export default page;
