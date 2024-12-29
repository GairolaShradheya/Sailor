"use client"
import { useState, useRef } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function page() {

  const id = useRef()
  const ref = useRef(false)
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  const postMe = async () => {
    await fetch('/api/add', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([{ _id: id.current, password: ref3.current.value }]) })
  }

  const check = () => {
    if (ref2.current.value == ref3.current.value) {
      alert("password changes succesfully")
      return true;
    }
    else {
      alert("password does not match")
      return false
    }
  }

  const handleclick = async () => {
    let res = await fetch('api/add/')
    let data = await res.json()

    data.forEach(e => {
      ref1.current.value == e.email && (ref.current = true && (id.current = e._id));
    });
    check() && postMe()
  }




  return (
    <>
      <Navbar />
      <div className='w-[80vw] h-[100vh] mx-auto flex flex-col gap-10 justify-center items-center p-10'>
        <h2 className='text-5xl font-bold'>Change Password</h2>
        <div className='flex flex-col gap-2'>
          <h2 className='pl-5'>Your email</h2>
          <input ref={ref1} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="email" placeholder='Enter your email' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='pl-5'>New Password</h2>
          <input ref={ref2} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" id="" placeholder='Enter new password' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='pl-5'>Confirm Password</h2>
          <input ref={ref3} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" id="" placeholder='Confirm password' />
        </div>
        <button onClick={() => { handleclick() }} className='border border-white px-4 py-2 rounded-full flex w-[200px] items-center bg-purple-700'><span className='mx-auto'>Change Password</span></button>
      </div>
      <Footer />
    </>
  )
}

export default page
