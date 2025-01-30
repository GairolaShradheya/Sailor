'use client'
import "@/app/home/home.css";
import React, { use } from "react";
import CartButton from "@/app/components/CartButton";

export default  function Page({ params }) {
    const products = JSON.parse(localStorage.getItem('products'))
    const slug = React.use(params).slug
    let product = {}

    for (const item of products) {
        if (item.id==slug){
            product=item;
        }
    }

    return (
        <>
            {(product!="undefined")?(<div className="flex flex-col md:flex-row pt-[11vh] w-[100vw] min-h-[100vh] px-3 z-50">
                <div className="flex justify-center md:w-[40vw] left-0 p-2">
                    <img className="md:h-[78vh] rounded-2xl" src={`${product.image}`} alt={`${product.title}`} />
                </div>
                <div className="relative md:w-[60vw] flex flex-col gap-4 p-2 items-center">
                    <h1 className="font-bold text-5xl py-2">{product.title}</h1>
                    <p className="text-3xl">Price :- ${product.price}</p>
                    <p className="text-3xl">Category :- {product.category}</p>
                    <p className="pb-[20vh] text-2xl md:pb-0">{product.description}</p>

                    <div className="absolute bottom-[10vh] w-[100%] flex justify-around md:h-[8vh] h-[5vh] md:py-1">
                        <button className="bg-violet-700 hover:scale-105 rounded-full border border-white px-4 ">BUY NOW</button>
                        <CartButton product={product} />
                    </div>
                </div>
            </div>):(
                <div className="w-full text-center text-3xl font-bold">Loading...</div>
            )}
        </>
    );
}
