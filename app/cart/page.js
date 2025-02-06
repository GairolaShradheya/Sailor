"use client"
import React, { useEffect } from 'react'
function Page() {
    let user = []
    if (typeof window !== "undefined") {
        user = (JSON.parse(localStorage.getItem('user')))
    }

    const products = user.cart
    let Total_amount = 0;
    for (const item of user.cart) {
        Total_amount += item.price;
    }

    return (
        <div className='min-h-screen md:px-[20vh] w-full pt-[10vh] pb-[8vh]'>
            <div className='text-xl flex justify-around items-center'>
                <div>
                    <h1>Total items are {(user.cart).length}</h1>
                    <h1>Total amount is ${Total_amount}</h1>
                </div>  
                <div className='text-black bg-white py-2 rounded-xl font-bold hover:scale-105 cursor-pointer px-4'>
                    Place Order
                </div>
            </div>
            {(products) && (products != "undefined") && (products.map((item) => {
                return (
                    <div key={item.id} className='flex flex-col gap-2 w-full h-full'>
                        <div className='w-full h-[1px] bg-gray-200'></div>
                        <div className='flex flex-col md:flex-row md:h-[80vh] w-full py-8 px-2'>
                            <img className='md:w-[40%] rounded-xl' src={item.image} alt='photo'></img>
                            <div className='flex flex-col p-8 gap-3 md:w-[55%]'>
                                <h3 className="text-white block overflow-hidden font-bold text-[5vh]">{item.title}</h3>
                                <p className='block text-[3vh]'>Price: ${item.price}</p>
                                <div className='text-[2vh]'>About: {item.description}</div>
                            </div>
                        </div>
                    </div>)
            }))}
            {(products == "undefined") && (
                <div className='w-full text-center font-bold text-3xl pt-5'>Your Cart is empty</div>
            )}
            <div className='text-black bg-white py-2 rounded-xl font-bold hover:scale-105 cursor-pointer px-4 absolute bottom-[9vh] right-3'>
                    Place Order
                </div>
        </div>
    )
}

export default Page
