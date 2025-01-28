"use client"
import { redirect } from 'next/navigation';
import React from 'react'
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function CartButton({ product }) {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))
    const result = useRef(false)
    const notify = (data) => toast(`${data}`);


    const handleCartClick = async () => {
        console.log(user.cart);
        if (!user.cart){
            notify("Enter details first")
            setTimeout(() => {
                redirect("/Dashboard")
            }, 5000);
        }

        if ((user.cart).length > 0) {
            console.log('iterating');
            for (const item of user.cart) {
                if (item.id == product.id) {
                    result.current = true
                }
            }
        }
        console.log(result);
        console.log(user.cart);
        if (user && result) {
            await fetch('/api/cart', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([product, user._id]) })
            console.log('sended');
        } else {
            notify("Already in cart")
            console.log("Already in cart")
        }
    }
    return (
        <div>
            <ToastContainer />
            <button onClick={() => { handleCartClick() }} className="bg-violet-700 h-[100%] rounded-full text-white border focus:font-bold border-white px-4 z-50">Add To Cart</button>
        </div>
    )
}

export default CartButton
