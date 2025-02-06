'use client'
import "@/app/home/home.css";
import React, { use } from "react";
import CartButton from "@/app/components/CartButton";

export default function Page({ params }) {
    let products = []
    if (typeof window !== "undefined") {
        products = JSON.parse(localStorage.getItem('products'))
    }
    const slug = React.use(params).slug
    let product = {}

    for (const item of products) {
        if (item.id == slug) {
            product = item;
        }
    }

    return (
        <>
            {(product != "undefined") ? (<div className="flex flex-col md:flex-row pt-[11vh] w-[100vw] min-h-[100vh] md:px-[10vw] px-[2vw] z-50">
                <div className="flex justify-end md:w-[30vw] left-0 ">
                    <img className="md:h-[78vh] md:rounded-s-2xl md:rounded-b-2xl" src={`${product.image}`} alt={`${product.title}`} />
                </div>
                <div className="relative md:w-[50vw] flex flex-col gap-4 py-2 items-start md:bg-white rounded-e-2xl">
                    <h1 className="font-bold text-[5vh] py-2 text-center rounded-e-2xl md:text-black">{product.title}</h1>
                    <div className="bg-[#020617] flex flex-col gap-3 h-full p-6 rounded-s-2xl">
                        <p className="text-[3vh]">Price :- ${product.price}</p>
                        <p className="text-[3vh]">Category :- {product.category}</p>
                        <p className="pb-[20vh] text-[2vh] md:pb-0">{product.description}</p>

                        <div className="absolute bottom-[10vh] w-[100%] flex justify-around md:h-[8vh] h-[5vh] md:py-1 right-0">
                            <button className="bg-violet-700 hover:scale-105 rounded-full border border-white px-4">BUY NOW</button>
                            <CartButton product={product} />
                        </div>
                    </div>
                </div>
            </div>) : (
                <div className="w-full text-center text-3xl font-bold">Loading...</div>
            )}
        </>
    );
}
