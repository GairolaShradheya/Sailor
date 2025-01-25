"use client"
import { useState, useRef, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { redirect } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';


function page() {
  const [data, setdata] = useState([])
  const [form, setform] = useState({ email: "", password: "", name: "", sername: "", number: "", address: "",cart:[] })
  const ref3 = useRef(false)
  const ref4 = useRef(false)
  const { data: session } = useSession()
  const notify = (data) => toast(`${data}`);

 const getdata = async () => {
  let res = await fetch('/api/add/')
  let data1 = await res.json()
  return data1
 }
  

  const handlechange = (e) => {
    let temp = e.target.name
    form[temp] = e.target.value
  }

  const post = async () => {
    (!ref3.current)&&await fetch('/api/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([{ email: `${session.user.email}`, name: `${session.user.name}`, image: `${session.user.image}` }]) })
  }

  const check = async () => {
    let data1 = await getdata()
    data1.forEach(e => {
      (e.email == session.user.email) && (ref3.current = true)
    }),
    (ref3.current)?notify("already signed up"):post();
    redirect('/')
  }

  const handleclick = async () => {
    let data1 = await getdata()
    data1.forEach(e => {
      (e.email == form.email) && (ref4.current = true)
    })
    if(ref4.current){
      notify("Already signed up! Login now")
      setTimeout(() => {
        redirect('/')
      }, 5000);
    }
    else{
    ((form.email != "") && (form.password != "")) ? (
      setdata([...data, form]),
      setform({ email: "", password: "", name: "", sername: "", number: "", address: "" }),
      await fetch('/api/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([...data, form]) }),
      notify("Completed! You can now login"))
      : (notify("Enter email and password"))
    }
    const inputs = document.querySelectorAll("input")
    console.log(inputs);
    for (const item of inputs) {
      item.value=""
    }
    }

  useEffect(() => {
      if (session) {
        check()
      }
  }, [session])

  return (
    <>
      <div className='w-full md:w-[80vw] min-h-[100vh] mx-auto flex flex-col justify-center gap-10 items-center pb-[10vh] pt-[10vh] z-50'>
        <ToastContainer/>
        <h2 className='text-5xl font-bold'>Sign Up</h2>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='flex flex-col gap-6 items-end'>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
              <h2 className='md:pl-5 text-2xl font-bold'>Your Name :-</h2>
              <input onChange={(e) => { handlechange(e) }} className='md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="text" name="name" placeholder='Enter your name' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
              <h2 className='md:pl-5 text-2xl font-bold'>Your Mobile No. :-</h2>
              <input onChange={(e) => { handlechange(e) }} className='md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="number" name="number" placeholder='Enter your mobile no.' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
              <h2 className='md:pl-5 text-2xl font-bold'>Your email :-</h2>
              <input onChange={(e) => { handlechange(e) }} className='md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="email" placeholder='Enter your email' />
            </div>
          </div>
          <div className='flex flex-col gap-6 items-start'>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
              <h2 className='md:pl-5 text-2xl font-bold'>Your Sername :-</h2>
              <input onChange={(e) => { handlechange(e) }} className='md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="text" name="sername" placeholder='Enter your sername' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
              <h2 className='md:pl-5 text-2xl font-bold'>Your Address :- </h2>
              <input onChange={(e) => { handlechange(e) }} className='md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="text" name="address" placeholder='Enter your address' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
              <h2 className='md:pl-5 text-2xl font-bold'>Your Password :-</h2>
              <input onChange={(e) => { handlechange(e) }} className='md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" placeholder='Enter your password' />
            </div>
          </div>

        </div>
        <button onClick={() => { handleclick() }} className='border border-white px-4 py-2 rounded-full flex w-[100px] items-center bg-purple-700'><span className='mx-auto'>Sign Up</span></button>
        <div>
          <button onClick={() => { signIn('github') }} className='border border-white shadow-violet-400 shadow-lg px-3 py-1 rounded-lg bg-slate-900'>Sign in with Github</button>
        </div>
      </div>
    </>
  )
}

export default page
