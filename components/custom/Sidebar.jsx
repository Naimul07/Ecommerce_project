'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
const Sidebar = () => {
  const categories = [
    { name: "Woman’s Fashion", subCategories: ["Dresses", "Tops", "Shoes"] },
    { name: "Men’s Fashion", subCategories: ["Shirts", "Pants", "Shoes"] },
    { name: "Electronics", subCategories: ["Mobile Phones", "Laptops", "Accessories"] },
    { name: "Home & Lifestyle", subCategories: ["Furniture", "Decor", "Kitchen"] },
    { name: "Sports & Outdoor", subCategories: ["Fitness", "Camping", "Footwear"] },
    { name: "Baby’s & Toys", subCategories: ["Clothing", "Toys", "Baby Care"] },
    { name: "Groceries & Pets", subCategories: ["Food", "Pet Supplies"] },
    { name: "Health & Beauty", subCategories: ["Skincare", "Makeup", "Wellness"] },
    { name: "Medicine", subCategories: ["Prescription", "Over-the-Counter"] },

  ];
  const [open, setOpen] = useState(null);
  function handleClick(index) {
    setOpen((prev) => prev === index ? null : index);
    // console.log(index);
  }
  /*  useEffect(() => {
     console.log("Updated open state:", open);
   }, [open]); */
  return (
    <>
      <div className="">
        <ul>
          {
            categories.map((category, index) => (
              <li key={index} className=" relative">
                <div className="">
                  <div className="flex justify-between items-center cursor-pointer p-2" onClick={() => handleClick(index)}>
                    <span className="text-gray-800 font-medium">{category.name}</span>
                    <span className="text-gray-500">
                      {open === index ? <RiArrowDropDownLine size={24}/> : <RiArrowDropRightLine size={24} />}
                    </span>
                  </div>
                  {
                    open === index && (
                      <div className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-lg z-10 w-48">
                        <ul className="py-2">
                          {
                            category.subCategories.map((subcategory, subIndex) => (
                              <li key={subIndex} ><Link href='/' className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">{subcategory}</Link></li>
                            ))
                          }

                        </ul>
                      </div>
                    )
                  }
                </div>

              </li>
            ))
          }

        </ul>
      </div>
    </>
  )
}

export default Sidebar