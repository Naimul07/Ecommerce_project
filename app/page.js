import FlashProduct from "@/components/custom/FlashProduct";
import Hero from "@/components/custom/Hero";
import Product from "@/components/custom/Product";
import axios from "axios";
import Image from "next/image";

export default async function Home() {
  

  return (
    <div className="container mx-auto md:px-2 mt-14">
      <Hero/>
      <FlashProduct/>
    </div>
  );
}
