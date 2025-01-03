import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa";
import CartIcon from "./CartIcon";
const Navbar = () => {
    return (
        <>
            <div className="border-b p-2 bg-white fixed top-0 left-0 right-0 z-20">
                <nav className="container mx-auto py-2 px-2 sm:px-0 xl:px-4 max-xl:px-8 flex justify-between items-center">
                    <div className="font-bold">
                        <Link href='/'>Exclusive</Link>
                    </div>
                    <ul className="hidden md:flex md:space-x-4">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/'>Contact</Link>
                        </li>
                        <li>
                            <Link href='/'>About</Link>
                        </li>
                        <li>
                            <Link href='/login'>SignUp</Link>
                        </li>

                    </ul>
                    <ul className="flex space-x-4 items-center">
                        <li>
                            <Input type="search" placeholder="Search .." />
                        </li>
                        <li>
                            <FaRegHeart size={25} />
                        </li>
                        <li>
                            <Link href='/cart'> <CartIcon /> </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar