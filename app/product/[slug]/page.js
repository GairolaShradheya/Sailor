'use client'
import "@/app/home/home.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import CartButton from "@/app/components/CartButton";
import { useSession } from "next-auth/react";

export default function Page({ params }) {
    const [product, setproduct] = useState({})
    let { data: session } = useSession()
    const slug = React.use(params).slug
    let products = []
    const [user, setuser] = useState()
    const [hide, sethide] = useState(true)
    const [show, setshow] = useState(1)
    const notify = (data) => (toast(`${data}`, { closeOnClick: true }));


    useEffect(() => {
        if (typeof window !== "undefined") {
            products = JSON.parse(localStorage.getItem('products'))
        }
        if (user) {
            setuser(session.user)
        }
        setproduct(products[slug])
    }, [])


    const buy = () => {
        if (user) {
            sethide(!hide)
        }
        else {
            notify("Please login first!")
        }
    }

    const changeit = (e) => {
        setshow(e)
    }

    return (
        <>
            <ToastContainer />
            {(product != "undefined") ? (
                <div className="flex flex-col md:flex-row pt-[11vh] w-[100vw] min-h-[100vh] md:px-[10vw] px-[2vw] z-50">
                    <div className="flex bg-white justify-end md:w-[30vw] left-0 ">
                        <img className="md:h-[78vh]  " src={`${product.image}`} alt={`${product.title}`} />
                    </div>
                    <div className="relative md:w-[50vw] flex flex-col gap-4 items-start rounded-e-[5vw]">
                        <h1 className="font-bold text-[5vh] text-white w-full text-center rounded-e-[5vw] ">{product.title}</h1>
                        <div className="bg-[#020617] flex flex-col gap-3 h-full p-6 rounded-s-[5vw]">
                            <p className="text-[3vh]">Price :- ${product.price}</p>
                            <p className="text-[3vh]">Category :- {product.category}</p>
                            <p className="pb-[20vh] text-[2vh] md:pb-0">{product.description}</p>

                            <div className="absolute bottom-[10vh] w-[100%] flex justify-around md:h-[8vh] h-[5vh] md:py-1 right-0">
                                <button className="bg-violet-700 hover:scale-105 rounded-full border border-white px-4" onClick={() => { buy() }}>BUY NOW</button>
                                <CartButton product={product} />
                            </div>
                        </div>
                    </div>
                    {(!hide) && (
                        <div className="fixed p-5 shadow-lg shadow-violet-600 md:w-[50vw] text-black rounded-[5vw] md:h-[70vh] right-[25vw] top-[25vh]">
                            <div className="w-full box-border shadow-lg shadow-gray-600 h-[10%] rounded-t-2xl">
                                <button onClick={() => { changeit(1) }} className={`w-1/2 rounded-t-[5vw] h-full ${(show == 1) && ("bg-gray-500 text-white")}`}>Summary</button>
                                <button onClick={() => { changeit(2) }} className={`w-1/2 rounded-t-[5vw] h-full ${(show == 2) && ("bg-violet-400 text-white")}`}>Payment</button>
                            </div>
                            {(show == 1) && (<div className="h-[80%] flex flex-col justify-center gap-5">
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[5vw] md:text-[2vw] font-bold'>Item name {product.title}</h1>
                                    <h1 className='text-[5vw] md:text-[2vw] font-bold'>Item Price ${product.price}</h1>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[5vw] md:text-[2vw] font-bold'>Your Name :- {user.name}</h1>
                                    <h1 className='text-[5vw] md:text-[2vw] font-bold'>Your Mobile No. :- {(user.number) ? (user.number) : 'Not given'}</h1>
                                    <h1 className='text-[5vw] md:text-[2vw] font-bold'>Your Address :- {(user.address) ? (user.address) : 'Not given'}</h1>
                                </div>
                            </div>)}
                            {((show == 2) && (
                                ((user.number) && (user.address)) ? (<div className="h-[80%] flex flex-col justify-center gap-5">
                                    the payment details will be here
                                </div>
                                ) : (
                                    <div className="h-[80%]">
                                        <h1 className="text-xl bg-red-400">Enter your details first!</h1>
                                    </div>
                                )))}
                            <div className="w-full flex gap-3 h-[10%]">
                                <button className="w-[50%] h-full rounded-[5vw] bg-red-400 font-bold" onClick={() => { sethide(!hide) }}>Cancel</button>
                                <button className="w-[50%] h-full rounded-[5vw] bg-red-400 font-bold" onClick={() => (changeit(false))}>Continue</button>
                            </div>

                        </div>)}
                </div>) : (
                <div className="w-full text-center text-3xl font-bold">Loading...</div>
            )}
        </>
    );
}
