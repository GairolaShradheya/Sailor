import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between px-10 bg-gray-900 h-[10vh] text-white items-center'>
      <h1 className='font-bold text-3xl'>Sale<span className='text-violet-500'>Sailor</span></h1>
      <div className='flex gap-4'>
        <button className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Sign up</button>
        <button className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
