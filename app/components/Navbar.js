"use client"
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { redirect } from 'next/navigation'

function Navbar() {
  const { data: session } = useSession()
  const ref = useRef()
  const [hide, sethide] = useState(true)
  const ref3 = useRef(false)
  const mysession = useSelector((state) => state.mysession.value)
  const [user, setuser] = useState(null)
  

  const signoutfunc = () => {
    if (session) {
      signOut()
      localStorage.setItem('user', null)
    }
    else {
      setuser(null)
      localStorage.setItem('user', null)
    }
  }

  const answer1 = () => {
    alert("Sign up first")
    localStorage.setItem('user', null)
    signOut()
  }
  const answer2 = (e) => {
    ref3.current = true
    localStorage.setItem('user', JSON.stringify(e))
    setuser(JSON.parse(localStorage.getItem('user')))

  }

  const getdata = async () => {
    let res = await fetch('/api/add/')
    let data1 = await res.json()
    return data1
  }


  const check = async (compare) => {
    setTimeout(async () => {
      let data1 = await getdata();
      (data1.forEach(e => {
        (e.email == compare) && (answer2(e))
      })),
        (!ref3.current) && (answer1());
    }, 2000);
  }


  useEffect(() => {
    (session) ? check(session.user.email) : setuser(null)
  }, [hide, session])

  useEffect(() => {
    (mysession) && check(mysession.email)
  }, [hide, mysession])

  const handleclick = () => {
    sethide(!hide)
  }


  return (
    <nav className='flex justify-between px-10 bg-gray-900 h-[10vh] absolute top-0 w-full text-white items-center z-10'>
      <Link href='/' className='font-bold text-3xl'>Sale<span className='text-violet-500'>Sailor</span></Link>

      {(user) && (
        <div className='flex gap-5 items-center'>
          <Link className='invert' href={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 6H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg></Link>
          <button onClick={() => { signoutfunc() }} className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Sign Out</button>
          <div className='flex flex-col'>
            <div onClick={() => { handleclick() }} className='flex items-center cursor-pointer'>
              <img src={user.image} alt="profile" className='h-10 w-10 rounded-full' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 10.5C16 10.5 13.054 13.5 12 13.5C10.9459 13.5 8 10.5 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          {(!hide && ref3.current) && (
            <div onBlur={() => sethide(true)} ref={ref} className='py-2 absolute top-[10vh] p-3 w-[13vw] overflow-hidden bg-[#4a4a4a] rounded-3xl '>
              <div className='w-full text-center font-bold'>{user.name}</div>
              <div className='pb-1'>{user.email}</div>
              <div className='border border-gray-500 w-full'></div>
              <Link className='w-full block text-center py-1' href='/Dashboard'>Dashboard</Link>
              <div className='border border-gray-500 w-full'></div>
              <button onClick={() => { signoutfunc() }} className='w-full py-1 text-center'>Sign Out</button>
            </div>
          )}
        </div>
      )}
      {(!user) && (
        <div className='flex gap-2'>
          <Link href={'/login'} className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Log in</Link>
          <Link href={'/signup'} className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Sign Up</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
