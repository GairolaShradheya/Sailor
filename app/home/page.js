import "../home/home.css";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default async function Page() {
    let me = await fetch("https://fakestoreapi.com/products")
    let res =await me.json()
    const products= await res
    return (
        <>
            <Navbar/>
            <div className="pt-[10vh] min-h-[100vh]">
            <div className="hero-section" id="home">
                <h2 className="font-bold">Welcome to Sale Sailor</h2>
                <p>Discover the best deals on your favorite products!</p>
                <button>Shop Now</button>
            </div>
 
            <div className="product-section pb-[15vh]" id="products">
                {products.map((product, index) => (
                    <Link key={index} href={`../product/${product.id}`} className="grid grid-flow-row items-center justify-center product-card p-5">
                        <img className="h-[50%]" src={product.image} alt={product.title} />
                        <h3 className="text-black overflow-hidden">{product.title}</h3>
                        <p>${product.price}</p>
                        <div className="flex justify-center items-center"><button className="h-[10%] rounded-2xl font-bold">BUY NOW</button></div>
                    </Link>
                ))}
            </div>
            </div>

            <Footer/>
        </>
    );
}
