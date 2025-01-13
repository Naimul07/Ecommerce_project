'use client';
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaTshirt, FaLaptop, FaRunning, FaHome, FaBaby, FaCartPlus, FaHeartbeat, FaPills } from "react-icons/fa";

const Sidebar = () => {
  const categories = [
    { name: "Woman’s Fashion", icon: <FaTshirt />, subCategories: ["Dresses", "Tops", "Shoes"] },
    { name: "Men’s Fashion", icon: <FaTshirt />, subCategories: ["Shirts", "Pants", "Shoes"] },
    { name: "Electronics", icon: <FaLaptop />, subCategories: ["Mobile Phones", "Laptops", "Accessories"] },
    { name: "Home & Lifestyle", icon: <FaHome />, subCategories: ["Furniture", "Decor", "Kitchen"] },
    { name: "Sports & Outdoor", icon: <FaRunning />, subCategories: ["Fitness", "Camping", "Footwear"] },
    { name: "Baby’s & Toys", icon: <FaBaby />, subCategories: ["Clothing", "Toys", "Baby Care"] },
    { name: "Groceries & Pets", icon: <FaCartPlus />, subCategories: ["Food", "Pet Supplies"] },
    { name: "Health & Beauty", icon: <FaHeartbeat />, subCategories: ["Skincare", "Makeup", "Wellness"] },
    { name: "Medicine", icon: <FaPills />, subCategories: ["Prescription", "Over-the-Counter"] },
  ];

  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className="md:w-full xl:w-72 rounded-lg shadow-sm">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="relative">
            <div>
              <div
                className="flex justify-between items-center text-sm lg:text-base cursor-pointer p-2 bg-white rounded-lg hover:bg-gray-200 transition"
                 onMouseEnter={()=>handleClick(index)}
              >
                <span className="text-gray-800 font-medium flex items-center space-x-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
                <span className="text-gray-500">
                  {open === index ? (
                    <RiArrowDropDownLine size={24} />
                  ) : (
                    <RiArrowDropRightLine size={24} />
                  )}
                </span>
              </div>
              {open === index && (
                <div className="absolute left-full text-sm lg:text-base top-0 ml-2 bg-white shadow-lg rounded-lg z-10 w-48 animate-fadeIn">
                  <ul className="py-2">
                    {category.subCategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href="/"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                        >
                          {subcategory}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
