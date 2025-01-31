"use client"
import { useState, useRef } from 'react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { get_data } from '../redux/mongodata';

function Page() {

  const id = useRef()
  const ref = useRef(false)
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  
  const notify = (data) => toast(`${data}`,{closeOnClick:true});
  let data = useSelector((state) => state.mongodata.value)
  
  const dispatch = useDispatch()

  const postMe = async () => {
    await fetch('/api/forget', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([{ _id: id.current, password: ref3.current.value }]) })
  }

  const check = () => {
    if (ref2.current.value == ref3.current.value) {
      notify("password changes succesfully")
      return true;
    }
    else {
      notify("password does not match")
      return false
    }
  }

  const handleclick = async () => {
    if (data == null) {
      let res = await fetch('api/add/')
      data = await res.json()
      dispatch(get_data(data))
    }

    data.forEach(e => {
      ref1.current.value == e.email && (ref.current = true && (id.current = e._id));
    });
    check() && postMe()
  }




  return (
    <>
      <div className='md:w-[80vw] w-full min-h-[100vh] mx-auto flex flex-col gap-10 md:justify-center py-[10vh] items-center md:p-10 z-50'>
        <ToastContainer />
        <h2 className='text-4xl md:text-5xl font-bold'>Change Password</h2>
        <div className='flex flex-col gap-2'>
          <h2 className='md:pl-5 text-xl'>Your email</h2>
          <input ref={ref1} className='md:w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="email" placeholder='Enter your email' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='md:pl-5 text-xl'>New Password</h2>
          <input ref={ref2} className='md:w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" id="" placeholder='Enter new password' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='md:pl-5 text-xl'>Confirm Password</h2>
          <input ref={ref3} className='md:w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="password" id="" placeholder='Confirm password' />
        </div>
        <button onClick={() => { handleclick() }} className='border border-white px-4 py-2 rounded-full flex w-[200px] items-center bg-purple-700'><span className='mx-auto'>Change Password</span></button>
      </div>
    </>
  )
}

export default Page
