import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa";
import CartIcon from "./CartIcon";

import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const Navbar = () => {
    return (
        <>
            <div className="border-b py-3 bg-white fixed top-0 left-0 right-0 z-20">
                <nav className="container mx-auto py-2 px-2 sm:px-0 xl:px-4 max-xl:px-8 flex justify-between items-center">
                    <div className="font-bold sm:text-lg md:text-xl">
                        <Link href='/'>Exclusive</Link>
                    </div>
                    <ul className="hidden md:flex md:space-x-4 ">
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
                        <li className="sm:hidden ">
                            <CiSearch size={25} />
                        </li>
                        <li>
                            <FaRegHeart size={25} />
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
        </>
    )
}

export default Navbar