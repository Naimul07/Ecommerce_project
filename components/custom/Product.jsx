import ProductList from './ProductList';

const Product = () => {
  const products = [
    {
      id: 1,
      subcategory_id: 1,
      name: 'Iphone 16',
      description: 'The Apple iPhone 16 Pro Max continues to surprise Apple fans with its array of upgraded features. Available in multiple colors, it offers an exceptional camera for stunning photography and high-quality video recording. Its impressive performance makes it stand out among other devices, delivering speed and power beyond expectations. With an excellent battery life, even heavy users can easily last a full day. The iPhone 16 Pro Max is sure to captivate Apple enthusiasts.',
      price: '1010000',
      stock_quantity: 100,
      src:'/iphone/image.png',
      created_at: '2025-01-10T12:00:00.000000Z',
      updated_at: '2025-01-10T12:00:00.000000Z',
    },
    {
      id: 2,
      subcategory_id: 1,
      name: 'Xiaomi Pad 7',
      description: 'Explore Xiaomi Pad 7, which is perfect for both work and entertainment. It offers a vibrant display with smooth visuals for gaming and streaming. The powerful processors make it easy to handle multitasking and productivity tasks. It has fast charging and a long-lasting battery for all-day use. The Pad 7 runs on Xiaomi’s HyperOS which provides great features for multitasking and customization. With various storage options, this tablets are perfect for anyone looking for reliable performance and versatility in their daily activities',
      price: '33000',
      stock_quantity: 50,
       src:'/xiaomi/image.png',
      created_at: '2025-01-11T14:00:00.000000Z',
      updated_at: '2025-01-11T14:00:00.000000Z',
    },
    {
      id: 3,
      subcategory_id: 2,
      name: 'Galaxy A36 5G',
      description: 'Samsung has officially launched the Galaxy A36 5G in March 2025. This device brings a sleek and modern design with a 6.7-inch Super AMOLED display that offers 120Hz refresh rate and HDR10+ support for a smooth and vibrant viewing experience. Powered by the Snapdragon 6 Gen 3 chipset, it ensures efficient performance for gaming and multitasking. The 50MP triple-camera setup with OIS and 4K video recording delivers sharp and stable images. A 5000mAh battery with 45W fast charging keeps you powered throughout the day. With IP67 water resistance and Gorilla Glass Victus+ protection, the Galaxy A36 5G is built to last.',
      price: '41000',
      stock_quantity: 20,
      src:'/a36/image.png',
      created_at: '2025-01-12T10:00:00.000000Z',
      updated_at: '2025-01-12T10:00:00.000000Z',
    },
    {
      id: 4,
      subcategory_id: 2,
      name: 'watch7',
      description: 'Samsung Galaxy Watch7 comes in two sizes (44mm and 40mm) for a perfect fit with your hand. Durability is ensured as the display is protected by sapphire crystal, ensuring durability against scratches. Its lightweight build ensures comfortable wear, ideal for everyday use. Designed for adventure, it meets Military-STD-810H standards.  Enjoy a greater viewing experience on the 1.5-inch Super AMOLED display. Powered by an Exynos processor and 2GB RAM, it delivers quick response times for all your apps. Larger variant a long-lasting 425mAh battery, keeping you connected throughout the day. Charge it quickly wirelessly with the 10W Qi enabled charger and get right back in your health activity tracking.',
      price: '85000.00',
      stock_quantity: 30,
       src:'/watch7/image.png',
      created_at: '2025-01-13T11:00:00.000000Z',
      updated_at: '2025-01-13T11:00:00.000000Z',
    },
    
  ];
  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default Product