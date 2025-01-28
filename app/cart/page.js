"use client"
import React, { useEffect } from 'react'

function page() {
    let user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        user = JSON.parse(localStorage.getItem('user'))
    }, [user])
    
    const products = user.cart

    return (
        <div className='min-h-screen md:px-[20vh] w-full pt-[10vh] pb-[8vh]'>
            {(products!="undefined")&&(products.map((item) => {
                return (
                    <div key={item.id} className='flex flex-col gap-2 w-full h-full'>
                        <div className='w-full h-[1px] bg-gray-200'></div>
                        <div className='flex flex-col md:flex-row w-full p-8'>
                            <img className='md:w-[40%] rounded-xl' src={item.image} alt='photo'></img>
                            <div className='flex flex-col p-8 md:w-[50%]'>
                                <h3 className="text-white block overflow-hidden font-bold text-2xl">{item.title}</h3>
                                <p className='block'>Price: ${item.price}</p>
                                <div>About: {item.description}</div>
                                <div className="flex justify-center items-center"><button className="h-[10%] rounded-2xl font-bold">BUY NOW</button></div>
                            </div>
                        </div>
                    </div>)
            }))}
            {(products=="undefined")&&(
                <div className='w-full text-center font-bold text-3xl pt-5'>Your Cart is empty</div>
            )}
        </div>
    )
}

export default page
