"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sign_In } from '@/app/redux/custom_session'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from 'next/navigation'
import { get_data } from '../redux/mongodata'


function Page() {

  const mysession = useSelector((state) => state.mysession.value)
  let data = useSelector((state) => state.mongodata.value)
  const dispatch = useDispatch()
  const notify = (data) => toast(`${data}`,{closeOnClick:true});
  const [check, setcheck] = useState({ email: "", password: "" })
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef(false)

  const handleclick = async () => {
    const ans = { email: `${ref1.current.value}`, password: `${ref2.current.value}` }
    setcheck(ans)
    if (data == null) {
      let res = await fetch('api/add/')
      data = await res.json()
      dispatch(get_data(data))
    }
    data.forEach(e => {
      ((e.email == ans.email) & (e.password == ans.password)) && (ref3.current = true);
    });
    if (ref3.current) {
      dispatch(sign_In(ans))
      setTimeout(() => {
        redirect('/')
      }, 2000);
    }
    else { notify("email or password is wrong") }
    ref1.current.value = ""
    ref2.current.value = ""
  }

  return (
    <>
      <div className='w-[100vw] md:w-[80vw] min-h-[100vh] mx-auto flex flex-col md:justify-center gap-10 items-center pt-[10vh] md:p-10'>
        <ToastContainer/>
        <h2 className='text-5xl font-bold'>Login</h2>
        <div className='flex flex-col gap-2'>
          <h2 className='pl-5'>Your email</h2>
          <input ref={ref1} className='md:w-[40vw] z-50 h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="" id="email" placeholder='Enter your email' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='pl-5'>Password</h2>
          <input ref={ref2} className='md:w-[40vw] z-50 h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="" id="password" placeholder='Enter your password' />
          <Link href={"/forgot"} className='hover:text-blue-400 z-50 underline pl-5 cursor-pointer w-fit'>Forgot Password?</Link>
        </div>
        <button onClick={() => { handleclick() }} className='border z-50 border-white px-4 py-2 rounded-full flex w-[100px] items-center bg-purple-700'><span className='mx-auto'>Login</span></button>
        <div>
          <button onClick={() => { signIn('github') }} className='border z-50 border-white shadow-violet-400 shadow-lg px-3 py-1 rounded-lg bg-slate-900'>Login in with Github</button>
        </div>
      </div>
    </>
  )
}

export default Page
