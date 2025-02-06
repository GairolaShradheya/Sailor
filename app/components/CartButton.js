"use client"
import { redirect } from 'next/navigation';
import React from 'react'
import { useState, useRef,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { refresh_data } from '../redux/refresh_card';

function CartButton({ product }) {
    const [user, setuser] = useState([])
    const result = useRef(true)
    const notify = (data) => toast(`${data}`,{closeOnClick:true});
    const dispatch = useDispatch()

    useEffect(() => {
        if (typeof window !== "undefined") {
            setuser(JSON.parse(localStorage.getItem('user')))
          }
    }, [])
    

    const handleCartClick = async () => {
        if (!user.cart) {
            notify("Enter details first")
            setTimeout(() => {
                redirect("/Dashboard")
            }, 5000);
        }

        else {
            if (((user.cart) && ((user.cart).length > 0))) {
                for (const item of user.cart) {
                    if (item.id == product.id) {
                        result.current = false
                    }
                }
            }
            if (user && result.current) {
                await fetch('/api/cart', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([product, user._id]) })
                dispatch(refresh_data())
                notify('Added to cart successfully!')
            }
            else {
                notify("Already in cart")
            }

        }

    }
    return (
        <div>
            <ToastContainer position="top-left"/>
            <button onClick={() => { handleCartClick() }} className="bg-violet-700 h-[100%] rounded-full text-white border hover:scale-110 border-white px-4 z-50">Add To Cart</button>
        </div>
    )
}

export default CartButton
