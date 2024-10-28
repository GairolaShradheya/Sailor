"use client"
import React from 'react'
import Link from 'next/link'
import { useState,useEffect,useRef } from 'react'

function navigation() {
    const [hide, sethide] = useState(true)
    const ref = useRef()

    useEffect(() => {
      (hide)?ref.current.className='flex flex-col gap-1 py-2 items-center bg-[#4a4a4a] rounded-3xl hidden':ref.current.className='flex flex-col gap-1 py-2 items-center bg-[#4a4a4a] rounded-3xl'
    }, [hide])
    
    const handleclick = () => {
        sethide(!hide)
    }
    return (
        <div className='fixed p-4 gap-5 flex flex-col justify-around w-[10vw] bottom-0 left-0 '>
            <div ref={ref} className='flex flex-col gap-1 py-2 items-center bg-[#4a4a4a] rounded-3xl'>
                <Link href='/home'>Home</Link>
                <div className='border border-gray-500 w-full'></div>
                <Link href='/login'>Login</Link>
                <div className='border border-gray-500 w-full'></div>
                <Link href='/signup'>Sign Up</Link>
            </div>
            <div>
                {hide ?
                    <svg onClick={() => { handleclick() }} className='invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                        <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> :
                    <svg onClick={() => { handleclick() }} className='invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
            </div>
        </div>
    )
}

export default navigation
