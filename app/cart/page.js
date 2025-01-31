"use client"
import React, { useEffect } from 'react'

function Page() {
    let user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        user = JSON.parse(localStorage.getItem('user'))
    }, [user])

    const products = user.cart

    return (
        <div className='min-h-screen md:px-[20vh] w-full pt-[10vh] pb-[8vh]'>
            {(products != "undefined") && (products.map((item) => {
                return (
                    <div key={item.id} className='flex flex-col gap-2 w-full h-full'>
                        <div className='w-full h-[1px] bg-gray-200'></div>
                        <div className='flex flex-col md:flex-row w-full p-8'>
                            <img className='md:w-[40%] rounded-xl' src={item.image} alt='photo'></img>
                            <div className='flex flex-col p-8 gap-3 md:w-[55%]'>
                                <h3 className="text-white block overflow-hidden font-bold text-5xl">{item.title}</h3>
                                <p className='block text-3xl'>Price: ${item.price}</p>
                                <div className='text-2xl'>About: {item.description}</div>
                            </div>
                        </div>
                    </div>)
            }))}
            {(products == "undefined") && (
                <div className='w-full text-center font-bold text-3xl pt-5'>Your Cart is empty</div>
            )}
        </div>
    )
}

export default Page
