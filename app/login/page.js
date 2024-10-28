"use client"
import Link from 'next/link'
import React from 'react'
import { useState,useRef } from 'react'

function page() {
  const [check, setcheck] = useState({email:"",password:""})
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef(false)
  console.log(ref3);
 
 
  const handleclick =async()=>{
    const ans={email:`${ref1.current.value}`,password:`${ref2.current.value}`}
    setcheck(ans)
    let res= await fetch('api/add/')
    let data = await res.json()
    data.forEach(e => {
      ((e.email==ans.email)&(e.password==ans.password))&&(ref3.current=true);
    });
    (ref3.current)?alert("welcome"):alert("email or password is wrong")
  }

  return (
    <div className='w-[80vw] h-full mx-auto flex flex-col gap-10 items-center p-10'>
      <h2 className='text-5xl font-bold'>Login</h2>
      <div className='flex flex-col gap-2'>
        <h2 className='pl-5'>Your email</h2>
        <input ref={ref1} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="" id="" placeholder='Enter your email'/>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pl-5'>Password</h2>
        <input ref={ref2} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="" id="" placeholder='Enter your password'/>
        <Link href={"/forgot"} className='hover:text-blue-400 underline pl-5 cursor-pointer w-fit'>Forgot Password?</Link>
      </div>
      <button onClick={()=>{handleclick()}} className='border border-white px-4 py-2 rounded-full flex w-[100px] items-center bg-purple-700'><span className='mx-auto'>Login</span></button>
      </div>
  )
}

export default page
