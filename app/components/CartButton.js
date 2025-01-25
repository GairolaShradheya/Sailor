"use client"
import React from 'react'
import { useState } from 'react'

function CartButton({ product }) {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))

   

    const handleCartClick = async () => {
        if (user) {
            await fetch('/api/cart', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([product, user._id]) })
        }
    }
    return (

        <button onClick={() => { handleCartClick() }} className="bg-violet-700 rounded-full text-white border focus:font-bold border-white px-4 ">Add To Cart</button>

    )
}

export default CartButton
