import React from 'react'

function page() {
  return (
    <div className='w-[80vw] h-full mx-auto flex flex-col gap-10 items-center p-10'>
      <h2 className='text-5xl font-bold'>Login</h2>
      <div className='flex flex-col gap-2'>
        <h2 className='pl-5'>Your email</h2>
        <input className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="email" name="" id="" placeholder='Enter your email'/>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='pl-5'>Password</h2>
        <input className='w-[40vw] h-[5vh] rounded-full px-10 py-5 text-black' type="password" name="" id="" placeholder='Enter your password'/>
        <p className='hover:text-blue-400 underline pl-5'>Forgot Password?</p>
      </div>
      <button className='border border-white px-4 py-2 rounded-full flex w-[100px] items-center bg-purple-700'><span className='mx-auto'>Login</span></button>
      </div>
  )
}

export default page
