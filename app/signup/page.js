"use client"
import { useState } from 'react'
import React from 'react'
import { redirect } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../components/loading';


function Page() {
  const [loading, setloading] = useState(false)
  const [data, setdata] = useState([])
  const [form, setform] = useState({ email: "", password: "", name: "", sername: "", number: "", address: "", cart: [] })
  const notify = (data) => toast(`${data}`, { closeOnClick: true });


  const handlechange = (e) => {
    let temp = e.target.name
    form[temp] = e.target.value
  }


  const handleclick = async () => {
    setloading(true)
    let ans = await fetch('/api/data', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email }) })
    console.log(ans);
    if (ans.data) {
      notify("Already signed up! Login now")
      setloading(false)
      setTimeout(() => {
        redirect('/')
      }, 5000);
    }
    else {
      ((form.email != "") && (form.password != "")) ? (
        setdata([...data, form]),
        setform({ email: "", password: "", name: "", sername: "", number: "", address: "" }),
        await fetch('/api/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([...data, form]) }),
        notify("Completed! You can now login"))
        : (notify("Enter email and password"))
        setloading(false)
    }

    if (typeof window !== "undefined") {
      const inputs = document.querySelectorAll("input")
      for (const item of inputs) {
        item.value = ""
      }
    }
  }


  return (loading)?(<Loading/>):(
    <>
      <div className='w-full md:w-[80vw] min-h-[100vh] mx-auto flex flex-col justify-center gap-10 items-center pb-[10vh] pt-[10vh]'>
        <ToastContainer />
        <h2 className='text-5xl font-bold'>Sign Up</h2>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='flex flex-col gap-3 items-end'>
              <input onChange={(e) => { handlechange(e) }} required className='z-50 md:w-[30vw] h-[6vh] rounded-xl px-10 py-5 text-black' type="text" name="name" placeholder='Enter your name' />
              <input onChange={(e) => { handlechange(e) }} required className='z-50 md:w-[30vw] h-[6vh] rounded-xl px-10 py-5 text-black' type="number" name="number" placeholder='Enter your mobile no.' />
              <input onChange={(e) => { handlechange(e) }} required className='z-50 md:w-[30vw] h-[6vh] rounded-xl px-10 py-5 text-black' type="email" name="email" placeholder='Enter your email' />
              <input onChange={(e) => { handlechange(e) }} required className='z-50 md:w-[30vw] h-[6vh] rounded-xl px-10 py-5 text-black' type="text" name="address" placeholder='Enter your address' />
              <input onChange={(e) => { handlechange(e) }} required className='z-50 md:w-[30vw] h-[6vh] rounded-xl px-10 py-5 text-black' type="password" name="password" placeholder='Enter your password' />
          </div>
        </div>
        <button onClick={() => { handleclick() }} className='z-50 border border-white px-4 py-2 rounded-full flex w-[100px] items-center bg-purple-700'><span className='mx-auto'>Sign Up</span></button>
      </div>
    </>
  )
}

export default Page
  