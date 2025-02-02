"use client"
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

function Navbar() {
  const { data: session } = useSession()
  const ref = useRef()
  const [hide, sethide] = useState(true)
  const ref3 = useRef(false)
  const mysession = useSelector((state) => state.mysession.value)
  let refresh_cart = useSelector((state) => state.refresh_cart.value)
  const [user, setuser] = useState({})
  
  const notify = () => toast("Sign Up first!",{closeOnClick:true});

  useEffect(() => {
    let temp_data = [];
    if (typeof window !== "undefined") {
      temp_data = (JSON.parse(localStorage.getItem('user')))
    }
    if (temp_data) {
      setuser(temp_data);
      setTimeout(() => {
      }, 6000);
    } else {
      console.log('No user data found in localStorage');
    }
  }, []);
  
  
  
  useEffect(() => {
  }, [user])
  

  const signoutfunc = () => {
    if (session) {
      signOut()
      if (typeof window !== "undefined") {
        localStorage.setItem('user', null)
      }
    }
    else {
      setuser(null)
      if (typeof window !== "undefined") {
        localStorage.setItem('user', null)
      }
    }
  }

  const answer1 = () => {
    notify()
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem('user', null)
      }
      signOut()
    }, 5000);
  }
  const answer2 = (e) => {
    ref3.current = true
    if (typeof window !== "undefined") {
      localStorage.setItem('user', JSON.stringify(e))
      setuser(JSON.parse(localStorage.getItem('user')))
    }

  }

  const getdata = async () => {
    let res = await fetch('/api/add/')
    let data1 = await res.json()
    console.log(data1);
    return data1
  }


  const check = async (compare) => {
    setTimeout(async () => {
      let data1;
      try{
        data1 = await getdata();
      }catch(error){
        console.error(error);
      }
      if (data1==[]){
        answer2({email: `${compare}`})
      }
      else {(data1.forEach(e => {
        (e.email == compare) && (answer2(e))
      })),
        (!ref3.current) && (answer1());}
    }, 2000);
  }


  useEffect(() => {
    (session) ? check(session.user.email) : setuser(null)
  }, [hide,refresh_cart, session])

  useEffect(() => {
    (mysession) && check(mysession.email)
  }, [hide,refresh_cart, mysession])

  const handleclick = () => {
    sethide(!hide)
  }


  return (
    <nav className='flex justify-between px-3 md:px-10 bg-gray-900 h-[10vh] absolute top-0 w-full text-white items-center z-10'>
      <Link href='/' className='font-bold text-3xl'>Sale<span className='text-violet-500'>Sailor</span></Link>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {(user) && (
        <div className='flex gap-[6px] md:gap-5 items-center'>
          <Link className='invert hover:scale-110' href={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 6H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg></Link>
          <button onClick={() => { signoutfunc() }} className='border hover:scale-105 border-white px-2 md:px-4 py-2 rounded-full flex items-center bg-purple-700'>Sign Out</button>
          <div className='flex flex-col'>
            <div onClick={() => { handleclick() }} className='flex  items-center cursor-pointer'>
              <img src={user.image} alt="profile" className='h-10 w-10 rounded-full' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 10.5C16 10.5 13.054 13.5 12 13.5C10.9459 13.5 8 10.5 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          {(!hide && ref3.current) && (
            <div onBlur={() => sethide(true)} ref={ref} className='py-2 absolute right-0 top-[10vh] p-3 w-[40vw] md:w-[13vw] overflow-hidden bg-[#4a4a4a] rounded-3xl '>
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
          <Link href={'/login'} className='border hover:scale-105 border-white px-2 md:px-4 py-2 rounded-full flex items-center bg-purple-700'>Log in</Link>
          <Link href={'/signup'} className='border hover:scale-105 border-white px-2 md:px-4 py-2 rounded-full flex items-center bg-purple-700'>Sign Up</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
