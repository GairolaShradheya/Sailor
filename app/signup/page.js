"use client"
import { useState, useRef, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { redirect } from 'next/navigation'

function page() {
  const [data, setdata] = useState([])
  const [form, setform] = useState({ email: "", password: "", name: "", sername: "", number: "", address: "",cart:[] })
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef(false)
  const ref4 = useRef(false)
  const { data: session } = useSession()
  console.log(session);

 const getdata = async () => {
  let res = await fetch('/api/add/')
  let data1 = await res.json()
  return data1
 }
  

  const handlechange = (e) => {
    let temp = e.target.name
    form[temp] = e.target.value
    console.log(form);
  }

  const post = async () => {
    console.log("post start");
    (!ref3.current)&&await fetch('/api/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([{ email: `${session.user.email}`, name: `${session.user.name}`, image: `${session.user.image}` }]) })
  }

  const check = async () => {
    let data1 = await getdata()
    data1.forEach(e => {
      (e.email == session.user.email) && (ref3.current = true)
    }),
    (ref3.current)?alert("already signed up"):post();
    redirect('/')
  }

  const handleclick = async () => {
    let data1 = await getdata()
    data1.forEach(e => {
      (e.email == form.email) && (ref4.current = true)
    })
    if(ref4.current){
      alert("Already signed up")
      redirect('/')
    }
    else{
    ((form.email != "") && (form.password != "")) ? (
      setdata([...data, form]),
      setform({ email: "", password: "", name: "", sername: "", number: "", address: "" }),
      ref1.current.value = "",
      ref2.current.value = "",
      await fetch('/api/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([...data, form]) }),
      alert("Completed! You can now login"))
      : (alert("Enter email and password"))
    }
    
    }

  useEffect(() => {
      if (session) {
        check()
      }
  }, [session])

  return (
    <>
      <div className='w-[80vw] h-[100vh] mx-auto flex flex-col justify-center gap-10 items-center p-10 z-10'>
        <h2 className='text-5xl font-bold'>Sign Up</h2>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-6 items-end'>
            <div className='flex gap-5 justify-center items-center'>
              <h2 className='pl-5 text-2xl font-bold'>Your Name :-</h2>
              <input ref={ref1} onChange={(e) => { handlechange(e) }} className='w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="text" name="name" placeholder='Enter your name' />
            </div>
            <div className='flex gap-5 justify-center items-center'>
              <h2 className='pl-5 text-2xl font-bold'>Your Mobile No. :-</h2>
              <input ref={ref1} onChange={(e) => { handlechange(e) }} className='w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="number" name="number" placeholder='Enter your mobile no.' />
            </div>
            <div className='flex gap-5 justify-center items-center'>
              <h2 className='pl-5 text-2xl font-bold'>Your email :-</h2>
              <input ref={ref1} onChange={(e) => { handlechange(e) }} className='w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="email" placeholder='Enter your email' />
            </div>
          </div>
          <div className='flex flex-col gap-6 items-start'>
            <div className='flex gap-5 justify-center items-center'>
              <h2 className='pl-5 text-2xl font-bold'>Your Sername :-</h2>
              <input ref={ref1} onChange={(e) => { handlechange(e) }} className='w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="text" name="sername" placeholder='Enter your sername' />
            </div>
            <div className='flex gap-5 justify-center items-center'>
              <h2 className='pl-5 text-2xl font-bold'>Your Address :- </h2>
              <input ref={ref1} onChange={(e) => { handlechange(e) }} className='w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="text" name="address" placeholder='Enter your address' />
            </div>
            <div className='flex gap-5 justify-center items-center'>
              <h2 className='pl-5 text-2xl font-bold'>Your Password :-</h2>
              <input ref={ref2} onChange={(e) => { handlechange(e) }} className='w-[20vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" placeholder='Enter your password' />
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
