'use client'
import "../home/home.css";
import Link from "next/link";
import React from "react";

export default function Page() {
    let products = []
    if (typeof window !== "undefined") {
        products = JSON.parse(localStorage.getItem('products'))
      }
    
    return (
        <>
            <div className="pt-[10vh] w-full min-h-[100vh] z-50">
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
        </>
    );
}
