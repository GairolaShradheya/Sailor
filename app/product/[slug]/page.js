// export default async function Page({ params }) {
//     const slug = (await params).slug
//     return <div>My Post: {slug}</div>
//   }

import "@/app/home/home.css";
import React from "react";
import data from "@/app/new.json";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
export default async function Page({ params }) {
    const slug = (await params).slug
    let product = {};
    for(let item of data.products) {
      if (item.id==slug){
        product=item;
      }
    }

    return (
        <>
            <Navbar/>
            {(product.category=="Mobiles")&&
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="w-[40vw] left-0 h-[100%] p-2">
                    <img src={`${product.imgs}`} alt={`${product.title}`} />
                </div>
                <div className="w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- {product.price}</p>
                    <p>Brand :- {product.Brand}</p>
                    <p>RAM :- {product.RAM}</p>
                    <h2>Specifications :- {product.specs}</h2>
                    <p>Category :- {product.category}</p>
                    
                </div>
            </div>}
            
            {(product.category=="Books")&&
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="w-[40vw] left-0 h-[100%] p-2">
                    <img src={`${product.imgs}`} alt={`${product.title}`} />
                </div>
                <div className="w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- {product.price}</p>
                    <p>Language :- {product.Language}</p>
                    <p>Genre :- {product.Genre}</p>
                    <h2>Specifications :- {product.specs}</h2>
                    <p>Category :- {product.category}</p>
                    
                </div>
            </div>}
            
            {(product.category=="Clothings")&&
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="w-[40vw] left-0 h-[100%] p-2">
                    <img src={`${product.imgs}`} alt={`${product.title}`} />
                </div>
                <div className="w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- {product.price}</p>
                    <p>For :- {product.For}</p>
                    <h2>Specifications :- {product.specs}</h2>
                    <p>Category :- {product.category}</p>
                    
                </div>
            </div>}
            
            {(product.category=="Beauty")&&
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="w-[40vw] left-0 h-[100%] p-2">
                    <img src={`${product.imgs}`} alt={`${product.title}`} />
                </div>
                <div className="w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- {product.price}</p>
                    <p>Type :- {product.Type}</p>
                    <h2>Specifications :- {product.specs}</h2>
                    <p>Category :- {product.category}</p>
                    
                </div>
            </div>}
            
            {(product.category=="Furniture")&&
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="w-[40vw] left-0 h-[100%] p-2">
                    <img src={`${product.imgs}`} alt={`${product.title}`} />
                </div>
                <div className="w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- {product.price}</p>
                    <p>Type :- {product.Type}</p>
                    <h2>Specifications :- {product.specs}</h2>
                    <p>Category :- {product.category}</p>
                    
                </div>
            </div>}
            
            {(product.category=="Laptops")&&
            <div className="flex pt-[11vh] min-h-[100vh] px-3">
                <div className="w-[40vw] left-0 h-[100%] p-2">
                    <img src={`${product.imgs}`} alt={`${product.title}`} />
                </div>
                <div className="w-[60vw] flex flex-col gap-3 p-2">
                    <h1 className="font-bold text-2xl pb-5">{product.title}</h1>
                    <p>Price :- {product.price}</p>
                    <p>For :- {product.For}</p>
                    <p>Brand :- {product.Brand}</p>
                    <p>RAM :- {product.RAM}</p>
                    <p>Processor :- {product.Processor}</p>
                    <p>DisplaySize :- {product.DisplaySize}</p>
                    <p>HasSSD :- {product.HasSSD}</p>
                    <h2>Specifications :- {product.specs}</h2>
                    <p>Category :- {product.category}</p>
                    
                </div>
            </div>}
            

            <Footer/>
        </>
    );
}
