"use client"
import { redirect } from 'next/navigation';
import React from 'react'
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { refresh_data } from '../redux/refresh_card';

function CartButton({ product }) {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))
    const result = useRef(true)
    const notify = (data) => toast(`${data}`,{closeOnClick:true});
    const dispatch = useDispatch()


    const handleCartClick = async () => {
        console.log(user.cart);
        if (!user.cart) {
            notify("Enter details first")
            setTimeout(() => {
                redirect("/Dashboard")
            }, 5000);
        }

        else {
            if (((user.cart) && ((user.cart).length > 0))) {
                console.log('iterating');
                for (const item of user.cart) {
                    if (item.id == product.id) {
                        result.current = false
                    }
                }
            }
            console.log(result.current);
            if (user && result.current) {
                console.log('here');
                await fetch('/api/cart', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([product, user._id]) })
                console.log('sended');
                dispatch(refresh_data())
                notify('Added to cart successfully!')
            }
            else {
                notify("Already in cart")
                console.log("Already in cart")
            }

        }

    }
    return (
        <div>
            <ToastContainer/>
            <button onClick={() => { handleCartClick() }} className="bg-violet-700 h-[100%] rounded-full text-white border hover:scale-110 border-white px-4 z-50">Add To Cart</button>
        </div>
    )
}

export default CartButton
