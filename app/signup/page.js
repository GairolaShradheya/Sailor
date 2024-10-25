"use client"
import { useState } from 'react'
import React from 'react'

function page() {
  const [data, setdata] = useState([])
  const [form, setform] = useState({email:"",password:""})

  const handleclick = ()=>{
    console.log(form);
  }
  const handlechange = (e)=>{
    console.log(e.target.value);
    (e.target.name=='email')?form.email=e.target.value:form.password=e.target.value
  }


  return (
    <div className='w-[80vw] h-full mx-auto flex flex-col gap-10 items-center p-10'>
        <h2 className='text-5xl font-bold'>Sign Up</h2>
      <div className='flex flex-col gap-2'>
        <h2 className='pl-5'>Your email</h2>
        <input onChange={(e)=>{handlechange(e)}} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="email" id="" placeholder='Enter your email'/>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pl-5'>Password</h2>
        <input onChange={(e)=>{handlechange(e)}} className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" id="" placeholder='Enter your password'/>
      </div>
      <button onClick={()=>{handleclick()}} className='border border-white px-4 py-2 rounded-full flex w-[100px] items-center bg-purple-700'><span className='mx-auto'>Sign Up</span></button>
      </div>
  )
}

export default page
