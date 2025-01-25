"use client"
import { React, useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Dashboard() {
    // const ref1 = useRef([])
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))
    const [hide, sethide] = useState(true)
    // const [hide2, sethide2] = useState(true)
    const [data, setdata] = useState()
    const [form, setform] = useState()
    const notify = (data) => toast(`${data}`);



    useEffect(() => {
        if (user) {
            setdata([{ _id: user._id }])
            setform({ email: `${user.email}`, password: `${user.password}`, name: `${user.name}`, sername: `${user.sername}`, number: `${user.number}`, address: `${user.address}`, image: `${user.image}` })
        }
    }, [])

    useEffect(() => {
    }, [user])


    const HandleEditClick = () => {
        sethide(!hide)
    }

    const SaveChanges = async () => {
        setdata([...data, form])
        setform({ email: `${user.email}`, password: `${user.password}`, name: `${user.name}`, sername: `${user.sername}`, number: `${user.number}`, address: `${user.address}`, image: user.image })
        await fetch('/api/add', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([...data, form]) })
        notify("Data Saved Successfully!")
        const inputs = document.querySelectorAll("input")
        for (const item of inputs) {
            item.value = ""
        }
    }

    const handlechange = (e) => {
        form[e.target.name] = e.target.value
    }

    // const handleProfileImage = (e)=>{
    //     form[e.target.name] = e.target.files[0]
    // }

    return (
        <div className='ALL flex flex-col w-full gap-5 md:min-h-[100vh] text-white items-center pt-[10vh] pb-[10vh] px-5 z-50'>
            <ToastContainer />
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <p>Welcome to your dashboard</p>
            </div>
            {user && (
                <div className='flex flex-col md:flex-row gap-5 '>
                    <div className='First flex flex-col h-[68vh] md:w-[40vw] border border-gray-500 rounded-3xl p-5 items-center gap-5 overflow-x-auto'>
                        <div className='flex justify-center gap-5 '>
                            <div className='relative'>
                                <img src={`${user.image}`} alt="profile" className='text-center bg-black md:h-[15vh] rounded-full' />
                                {/* {(!hide)&&(<div onClick={() => { sethide2(!hide2) }} className='size-7 p-1 bg-white flex items-center justify-center rounded-full absolute bottom-0 right-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M13 4L20 11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M14 22L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>)} */}
                            </div>
                            <div className='flex flex-col justify-center w-[60%]'>
                                <h1 className='font-bold text-2xl'>{user.name}</h1>
                                <p>{user.email}</p>
                            </div>

                        </div>
                        {(hide) ? (
                            <div className='flex flex-col gap-5'>
                                {((user.name)!="undefined") && (<div className='font-bold text-lg font-serif'>Name:- {user.name}</div>)}
                                {((user.sername)!="undefined") && (<div className='font-bold text-lg font-serif'>Sername:- {user.sername}</div>)}
                                {((user.number)!="undefined") && (<div className='font-bold text-lg font-serif'>Number:- {user.number}</div>)}
                                {((user.address)!="undefined") && (<div className='font-bold text-lg font-serif'>Address:- {user.address}</div>)}
                                <button className='font-bold w-fit text-xl border border-white shadow-violet-400 shadow-lg px-3 py-1 rounded-lg bg-slate-900' onClick={() => { HandleEditClick() }}>Edit profile</button>
                            </div>
                        ) :
                            (<div className='FormClass flex flex-col items-start p-5 w-full gap-4 md:gap-2'>
                                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                                    <h2 className='pl-5 text-2xl font-bold '>Your Name :-</h2>
                                    <input onChange={(e) => { handlechange(e) }} className='md:w-[50%] h-[5vh] rounded-full px-10 py-5 text-black' value={user.name} type="text" name="name" placeholder='Enter your name' />
                                </div>
                                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                                    <h2 className='pl-5 text-2xl font-bold '>Mobile No. :-</h2>
                                    <input onChange={(e) => { handlechange(e) }} className='md:w-[50%] h-[5vh] rounded-full px-10 py-5 text-black' value={user.number} type="number" name="number" placeholder='Enter your mobile no.' />
                                </div>
                                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                                    <h2 className='pl-5 text-2xl font-bold '>Your e-mail :-</h2>
                                    <input onChange={(e) => { handlechange(e) }} className='md:w-[50%] h-[5vh] rounded-full px-10 py-5 text-black' value={user.email} type="email" name="email" placeholder='Enter your email' />
                                </div>
                                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                                    <h2 className='pl-5 text-2xl font-bold '>Your Sername :-</h2>
                                    <input onChange={(e) => { handlechange(e) }} className='md:w-[50%] h-[5vh] rounded-full px-10 py-5 text-black' value={user.sername} type="text" name="sername" placeholder='Enter your sername' />
                                </div>
                                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                                    <h2 className='pl-5 text-2xl font-bold '>Your Address :- </h2>
                                    <input onChange={(e) => { handlechange(e) }} className='md:w-[50%] h-[5vh] rounded-full px-10 py-5 text-black' value={user.address} type="text" name="address" placeholder='Enter your address' />
                                </div>
                                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                                    <h2 className='pl-5 text-2xl font-bold '>Your Password :-</h2>
                                    <input onChange={(e) => { handlechange(e) }} className='md:w-[50%] h-[5vh] rounded-full px-10 py-5 text-black' value={user.password} type="password" name="password" placeholder='Enter your password' />
                                </div>
                                <div className='flex gap-3 justify-center w-full mt-3'>
                                    <button className='font-bold w-fit text-xl border border-white shadow-violet-400 shadow-lg px-3 py-1 rounded-lg bg-slate-900' onClick={() => { HandleEditClick() }}>Cancel</button>
                                    <button className='font-bold w-fit text-xl border border-white shadow-violet-400 shadow-lg px-3 py-1 rounded-lg bg-slate-900' onClick={() => { SaveChanges() }}>Save</button>
                                </div>
                            </div>)}
                    </div>
                    <div className='Second md:w-[40vw] border border-gray-500 rounded-3xl p-5'>
                        <p className='w-full text-center font-bold'>Other details</p>
                    </div>
                    {/* {(!hide2 && !hide) && (
                        <div className='Third absolute w-[20%] h-[18%] p-3 top-[50vh] left-[40%] bg-[#24052d] rounded-xl'>
                            <div className='flex flex-col h-full w-full gap-2 items-center justify-center'>
                                <h1 className='font-bold text-xl'>
                                    Select Image
                                </h1>
                                <input onChange={(e) => { handleProfileImage(e) }} className='w-[80%]' type='file' name="image" />
                                <svg onClick={() => { sethide2(!hide2) }} className='absolute top-0 right-0 invert p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    )} */}
                </div>
            )}

            {!user && (
                <div>
                    <p>Please Sign Up to view this page</p>
                </div>
            )}


        </div>
    )
}

export default Dashboard
