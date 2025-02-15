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
                    <div className="flex justify-center items-center gap-2 w-full">
                        <div className="w-[50vw] h-[5vh] pl-[3%] rounded-full bg-white flex items-center gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            <input placeholder="Search here" className="w-[90%] text-black border-white h-full border" name="search"></input>
                        </div>
                        <div className="invert cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
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
