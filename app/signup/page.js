"use client"
import { useState, useRef } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function page() {
  const [data, setdata] = useState([])
  const [form, setform] = useState({ email: "", password: "" })
  const ref1 = useRef()
  const ref2 = useRef()

  const handleclick = async () => {
    setdata([...data, form])
    setform({ email: "", password: "" })
    ref1.current.value = ""
    ref2.current.value = ""
    await fetch('/api/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([...data, form]) })
  }

  const handlechange = (e) => {
    (e.target.name == 'email') ? form.email = e.target.value : form.password = e.target.value
  }


  return (
    <>
      <Navbar />
      <div className='w-[80vw] h-[100vh] mx-auto flex flex-col justify-center gap-10 items-center p-10'>
        <h2 className='text-5xl font-bold'>Sign Up</h2>
        <div className='flex flex-col gap-2'>
          <h2 className='pl-5'>Your email</h2>
          <input ref={ref1} onChange={(e) => { handlechange(e) }} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="email" placeholder='Enter your email' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='pl-5'>Password</h2>
          <input ref={ref2} onChange={(e) => { handlechange(e) }} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" id="" placeholder='Enter your password' />
        </div>
        <button onClick={() => { handleclick() }} className='border border-white px-4 py-2 rounded-full flex w-[100px] items-center bg-purple-700'><span className='mx-auto'>Sign Up</span></button>
      </div>
      <Footer />
    </>
  )
}

export default page
