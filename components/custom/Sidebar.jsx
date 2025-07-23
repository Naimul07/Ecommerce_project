'use client';
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { CiHeadphones, CiLaptop, CiMobile1, CiMonitor } from "react-icons/ci";
import { IoBatteryChargingOutline, IoTabletPortraitOutline, IoWatchOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { MdMouse } from "react-icons/md";

const Sidebar = () => {
  const categories = [
    { name: "Laptop", icon: <CiLaptop />, subCategories: ["Asus", "Hp", "Macbook"] },
    { name: "Moblie", icon: <CiMobile1 />, subCategories: ["iphone", "Samsung", "oppo"] },
    { name: "Headphones", icon: <CiHeadphones />, subCategories: ["redmi", "apple", "lenovo"] },
    { name: "Tablet", icon: <IoTabletPortraitOutline />, subCategories: ["Ipad", "Samsung", "redmi"] },
    { name: "Monitor", icon: <CiMonitor />, subCategories: ["Hp", "Walton", "veqo"] },
    { name: "Power & Accessories", icon: <IoBatteryChargingOutline />, subCategories: ["Power Banks", " Chargers & Adapters", "Extension Cords", "Batteries (Rechargeable)", "Wireless Chargers"] },
    {
      name: "Fitness & Wearable", icon: <IoWatchOutline />, subCategories: ["Smartwatches",

        "Fitness Bands",

        "Heart Rate Monitors",

        "Smart Rings"]
    },
    {
      name: "Peripherals", icon: <MdMouse />, subCategories: ["Keyboards",

        "Mice",

        "Printers & Scanners",

        "Webcams"]
    },
    {
      name: "Cover & Glass", icon: <FaShieldAlt />, subCategories: ["Phone Cases",

        "Tablet Covers",

        "Screen Protectors",

        "Camera Lens Protectors",

        "Laptop Skins"]
    },
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
                onClick={() => handleClick(index)}
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
