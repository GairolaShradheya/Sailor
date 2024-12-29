"use client";
import "../home/home.css";
import Link from "next/link";
import React from "react";
import data from "../new.json" 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page() {
    const products=data.products
    return (
        <>
            <Navbar/>
            <div className="pt-[10vh] min-h-[100vh]">
            <div className="hero-section" id="home">
                <h2 className="font-bold">Welcome to Sale Sailor</h2>
                <p>Discover the best deals on your favorite products!</p>
                <button>Shop Now</button>
            </div>
 
            <div className="product-section" id="products">
                {products.map((product, index) => (
                    <Link key={index} href={`../product/${product.id}`} className="product-card h-[60vh] p-5">
                        <img className="h-[50%]" src={product.imgs} alt={product.title} />
                        <h3 className="text-black h-[20%] overflow-hidden">{product.title}</h3>
                        <p className="h-[10%]">{product.price}</p>
                        <button className="h-[10%] rounded-2xl font-bold">BUY NOW</button>
                    </Link>
                ))}
            </div>
            </div>

            <Footer/>
        </>
    );
}
