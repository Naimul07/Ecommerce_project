import ProductList from './ProductList';

const Product = async () => {
  
  const products = [
    {
      id: 1,
      subcategory_id: 1,
      name: 'Classic White',
      description: 'A comfortable white t-shirt made from premium cotton.',
      price: '500.00',
      stock_quantity: 100,
      created_at: '2025-01-10T12:00:00.000000Z',
      updated_at: '2025-01-10T12:00:00.000000Z',
    },
    {
      id: 2,
      subcategory_id: 1,
      name: 'Graphic Black',
      description: 'Black t-shirt with a stylish graphic design.',
      price: '600.50',
      stock_quantity: 50,
      created_at: '2025-01-11T14:00:00.000000Z',
      updated_at: '2025-01-11T14:00:00.000000Z',
    },
    {
      id: 3,
      subcategory_id: 2,
      name: 'iPhone 14',
      description: 'The latest iPhone with A15 Bionic chip.',
      price: '100000.00',
      stock_quantity: 20,
      created_at: '2025-01-12T10:00:00.000000Z',
      updated_at: '2025-01-12T10:00:00.000000Z',
    },
    {
      id: 4,
      subcategory_id: 2,
      name: 'Samsung Galaxy S22',
      description: 'Experience next-gen mobile performance.',
      price: '85000.00',
      stock_quantity: 30,
      created_at: '2025-01-13T11:00:00.000000Z',
      updated_at: '2025-01-13T11:00:00.000000Z',
    },
    {
      id: 5,
      subcategory_id: 3,
      name: 'MacBook Pro 16"',
      description: 'Powerful laptop with M1 Pro chip.',
      price: '200000.00',
      stock_quantity: 15,
      created_at: '2025-01-14T12:00:00.000000Z',
      updated_at: '2025-01-14T12:00:00.000000Z',
    },
    {
      id: 6,
      subcategory_id: 4,
      name: 'Running Shoes',
      description: 'Lightweight and durable running shoes.',
      price: '4500.00',
      stock_quantity: 80,
      created_at: '2025-01-15T09:00:00.000000Z',
      updated_at: '2025-01-15T09:00:00.000000Z',
    },
    {
      id: 7,
      subcategory_id: 5,
      name: 'Casio G-Shock',
      description: 'Shock-resistant and water-resistant digital watch.',
      price: '12000.00',
      stock_quantity: 40,
      created_at: '2025-01-16T15:00:00.000000Z',
      updated_at: '2025-01-16T15:00:00.000000Z',
    },
    {
      id: 8,
      subcategory_id: 3,
      name: 'Dell XPS 13',
      description: 'Compact and powerful laptop for productivity.',
      price: '160000.00',
      stock_quantity: 25,
      created_at: '2025-01-17T16:00:00.000000Z',
      updated_at: '2025-01-17T16:00:00.000000Z',
    },
    {
      id: 9,
      subcategory_id: 2,
      name: 'OnePlus 11',
      description: 'Premium smartphone with 120Hz AMOLED display.',
      price: '65000.00',
      stock_quantity: 45,
      created_at: '2025-01-18T17:00:00.000000Z',
      updated_at: '2025-01-18T17:00:00.000000Z',
    },
    {
      id: 10,
      subcategory_id: 4,
      name: 'Formal Shoes',
      description: 'Elegant leather shoes perfect for formal occasions.',
      price: '5500.00',
      stock_quantity: 60,
      created_at: '2025-01-19T18:00:00.000000Z',
      updated_at: '2025-01-19T18:00:00.000000Z',
    },
    {
      id: 11,
      subcategory_id: 5,
      name: 'Fossil Gen 6',
      description: 'Smartwatch with advanced fitness tracking.',
      price: '25000.00',
      stock_quantity: 35,
      created_at: '2025-01-20T12:00:00.000000Z',
      updated_at: '2025-01-20T12:00:00.000000Z',
    },
    
  ];
  
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default Product