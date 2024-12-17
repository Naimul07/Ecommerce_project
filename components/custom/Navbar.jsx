import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    return (
        <>
            <div className="border-2 border-black p-2">
                <nav className="container mx-auto py-2 px-2 sm:px-0 flex justify-between items-center">
                    <div className="font-bold">
                        <Link href='/'>Exclusive</Link>
                    </div>
                    <ul className="hidden sm:flex sm:space-x-4">
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
                            <FaRegHeart size={25}/>
                        </li>
                        <li>
                            <MdOutlineShoppingCart size={25}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar