// export default async function Page({ params }) {
//     const slug = (await params).slug
//     return <div>My Post: {slug}</div>
//   }

import "@/app/home/home.css";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
export default async function Page({ params }) {
    let me = await fetch("https://fakestoreapi.com/products")
    let res = await me.json()
    const products = await res
    const slug = (await params).slug
    let product = {};
    for (let item of products) {
        if (item.id == slug) {
            product = item;
        }
    }

    return (
        <>
            <Navbar />
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="flex justify-center w-[40vw] left-0 p-2">
                    <img className="h-[78vh]" src={`${product.image}`} alt={`${product.title}`} />
                </div>
                <div className="relative w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- ${product.price}</p>
                    <p>Category :- {product.category}</p>
                    <p>Description :- {product.description}</p>

                    <div className="absolute bottom-[10vh] w-[100%] flex justify-around h-[8vh] py-1">
                        <button className="bg-violet-700 rounded-full border border-white px-4 ">BUY NOW</button>
                        <button className="bg-violet-700 rounded-full border border-white px-4 ">Add To Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
