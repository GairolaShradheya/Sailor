"use client"
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { useSession } from 'next-auth/react';
import { refresh_data } from '../redux/refresh_card';

function CartButton({ product }) {
    let { data: session } = useSession()
    const [user, setuser] = useState()
    const result = useRef(true)
    const notify = (data) => toast(`${data}`, { closeOnClick: true });
    const dispatch = useDispatch()

    let get_data = async () => {
        if (session) {
            let ans = await fetch('/api/data', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: session.user.email }) })
            let res = await ans.json()
            if (res.success) {
                setuser(res)
            }
        }
    }

    useEffect(() => {
        get_data()
    }, [session])


    const handleCartClick = async () => {
        if (user) {
            if ((user.cart)) {
                if((user.cart).length > 0){
                    for (const item of user.cart) {
                        if (item.id == product.id) {
                            result.current = false
                        }
                    }
                }
                if (result.current) {
                    await fetch('/api/cart', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([product, user._id]) })
                    dispatch(refresh_data())
                    notify('Added to cart successfully!')
                }
                else {
                    notify("Already in cart")
                }
            }
        } else {
            notify("Please login first!")
        }


    }
    return (
        <div>
            <ToastContainer position="top-left" />
            <button onClick={() => { handleCartClick() }} className="bg-violet-700 h-[100%] rounded-full text-white border hover:scale-110 border-white px-4 z-50">Add To Cart</button>
        </div>
    )
}

export default CartButton
