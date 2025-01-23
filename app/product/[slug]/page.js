import "@/app/home/home.css";
import React, { use } from "react";
import CartButton from "@/app/components/CartButton";
export default async function Page({ params }) {
    const slug = (await params).slug
    let me = await fetch(`https://fakestoreapi.com/products/${slug}`)
    let product = await me.json()



    return (
        <>
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="flex justify-center w-[40vw] left-0 p-2">
                    <img className="h-[78vh] rounded-2xl" src={`${product.image}`} alt={`${product.title}`} />
                </div>
                <div className="relative w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- ${product.price}</p>
                    <p>Category :- {product.category}</p>
                    <p>Description :- {product.description}</p>

                    <div className="absolute bottom-[10vh] w-[100%] flex justify-around h-[8vh] py-1">
                        <button className="bg-violet-700 rounded-full border border-white px-4 ">BUY NOW</button>
                        <CartButton product={product}/>
                    </div>
                </div>
            </div>
        </>
    );
}
