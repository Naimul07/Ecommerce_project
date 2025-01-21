'use client';

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaRegHeart, FaBars } from "react-icons/fa";
import CartIcon from "./CartIcon";
import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import Sidebar from "./Sidebar";
import WishlistIcon from "./WishlistIcon";

const Navbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // Toggle the sidebar visibility
    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    // Close sidebar when clicking on the backdrop
    const closeSidebar = () => {
        setSidebarVisible(false);
    };

    return (
        <>
            <div className="border-b py-3 bg-white fixed top-0 left-0 right-0 z-20">
                <nav className="container mx-auto py-2 px-2 sm:px-0 xl:px-4 max-xl:px-8 flex justify-between items-center">
                    <div className="flex items-center justify-center gap-4 font-bold sm:text-lg md:text-xl">
                        <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
                            <FaBars />
                        </div>
                        <Link href='/'>Exclusive</Link>
                    </div>
                    <ul className="hidden md:flex md:space-x-4 md:text-sm lg:text-base">
                        <li className="hover:border-b hover:border-blue-600">
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="hover:border-b hover:border-blue-600">
                            <Link href='/'>Contact</Link>
                        </li>
                        <li className="hover:border-b hover:border-blue-600">
                            <Link href='/'>About</Link>
                        </li>
                        <li className="hover:border-b hover:border-blue-600">
                            <Link href='/login'>SignUp</Link>
                        </li>
                    </ul>
                    <ul className="flex space-x-6 items-center">
                        <li className="hidden sm:block">
                            <Input type="search" placeholder="Search .." />
                        </li>
                        <li className="sm:hidden">
                            <CiSearch size={20} />
                        </li>
                        <li>
                            <Link href='/wishlist'> <WishlistIcon /> </Link>
                        </li>
                        <li>
                            <Link href='/cart'> <CartIcon /> </Link>
                        </li>
                        <li>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Sidebar */}
            {sidebarVisible && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30"
                        onClick={closeSidebar}
                    />
                    <div
                        className="fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white z-40 p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Sidebar />
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
