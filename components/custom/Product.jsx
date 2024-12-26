
import ProductList from './ProductList';
async function post() {

  try {
    const data = await fetch(`${process.env.DB_HOST}/api/products`);
    const product = await data.json();
    return product;
  }
  catch (error) {
    return null;
  }

}

const Product = async () => {
  const products = await post();

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default Product