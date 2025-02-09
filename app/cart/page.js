"use client"
import { useState,useRef } from "react"
function Page() {
    let user = []
    if (typeof window !== "undefined") {
        user = (JSON.parse(localStorage.getItem('user')))
    }
    const [form, setform] = useState({name:`${user.name}`,number:`${user.number}`,address:`${user.address}`})
    const [show, setshow] = useState(0)
    const [hide, sethide] = useState(true)


    const products = user.cart
    let Total_amount = 0;
    let Length_products = 0;

    try {
        Length_products = (user.cart).length;
    } catch (error) {
        console.log('length_item');
    }

    try {
        for (const item of products) {
            Total_amount += item.price;
        }
    } catch (error) {
        console.log('amount');
    }

    const handlechange = (e) => {
        let temp = e.target.name
        form[temp] = e.target.value
    }

    const changeit=(e)=>{
        setshow(e)
    }

    return (
        <div className='min-h-screen md:px-[20vh] w-full pt-[10vh] pb-[8vh]'>
            <div className='text-xl flex justify-around items-center'>
                <div>
                    <h1>Total items are {Length_products}</h1>
                    <h1>Total amount is ${Total_amount}</h1>
                </div>
                {(Length_products!=0)&&(<div onClick={()=>{sethide(!hide)}} className='text-black bg-white py-2 rounded-xl font-bold hover:scale-105 cursor-pointer px-4'>
                    Place Order
                </div>)}
            </div>
            {(products) ? (products != "undefined") && (products.map((item) => {
                return (
                    <div key={item.id} className='flex flex-col gap-2 w-full h-full'>
                        <div className='w-full h-[1px] bg-gray-200'></div>
                        <div className='flex flex-col md:flex-row md:h-[80vh] w-full py-8 px-2'>
                            <img className='md:w-[40%] rounded-xl' src={item.image} alt='photo'></img>
                            <div className='flex flex-col p-8 gap-3 md:w-[55%]'>
                                <h3 className="text-white block overflow-hidden font-bold text-[5vh]">{item.title}</h3>
                                <p className='block text-[3vh]'>Price: ${item.price}</p>
                                <div className='text-[2vh]'>About: {item.description}</div>
                            </div>
                        </div>
                    </div>)
            })):(
                <div className='w-full text-center font-bold text-3xl pt-5'>Your Cart is empty</div>
            )}
            {(products == "undefined") && (
                <div className='w-full text-center font-bold text-3xl pt-5'>Your Cart is empty</div>
            )}
            {((Length_products!=0))&&(<div onClick={()=>{sethide(!hide)}} className='text-black bg-white py-2 rounded-xl font-bold hover:scale-105 cursor-pointer px-4 absolute bottom-[9vh] right-3'>
                Place Order
            </div>)}
            {(!hide)&&(<div className="fixed p-5 bg-white shadow-lg shadow-violet-600 w-[50vw] text-black rounded-2xl h-[70vh] right-[25vw] top-[25vh]">
                <div className="w-full box-border shadow-lg shadow-gray-600 h-[10%]">
                    <button onClick={()=> {changeit(0)}} className={`w-1/3 rounded-t-2xl h-full ${(show==0)&&("bg-black text-white")}`}>Details</button>
                    <button onClick={()=> {changeit(1)}} className={`w-1/3 rounded-t-2xl h-full ${(show==1)&&("bg-gray-500 text-white")}`}>Summary</button>
                    <button onClick={() =>{changeit(2)}} className={`w-1/3 rounded-t-2xl h-full ${(show==2)&&("bg-violet-400 text-white")}`}>Payment</button>
                </div>
                {(show==0)&&(<div className="h-[80%] flex flex-col justify-center gap-5">
                    <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                        <h2 className='md:pl-5 text-2xl font-bold'>Your Name :-</h2>
                        <input onChange={(e) => { handlechange(e) }} className='z-50 md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-white bg-black' value={form.name} type="text" name="name" placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                        <h2 className='md:pl-5 text-2xl font-bold'>Your Mobile No. :-</h2>
                        <input onChange={(e) => { handlechange(e) }} className='z-50 md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-white bg-black' value={form.number} type="number" name="number" placeholder='Enter your mobile no.' />
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                        <h2 className='md:pl-5 text-2xl font-bold'>Your Address :-</h2>
                        <input onChange={(e) => { handlechange(e) }} className='z-50 md:w-[20vw] h-[5vh] rounded-full px-10 py-5 text-white bg-black' value={form.address} type="text" name="address" placeholder='Enter your address' />
                    </div>
                </div>)}
                {(show==1)&&( <div className="h-[80%] flex flex-col justify-center gap-5">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold'>Total items are {Length_products}</h1>
                        <h1 className='text-2xl font-bold'>Total amount is ${Total_amount}</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold'>Your Name :- {form.name}</h1>
                        <h1 className='text-2xl font-bold'>Your Mobile No. :- {form.number}</h1>
                        <h1 className='text-2xl font-bold'>Your Address :- {form.address}</h1>
                    </div>
                </div>)}
                {(show==2)&&(
                    <div className="h-[80%] flex flex-col justify-center gap-5">
                        the payment details will be here
                    </div>
                )
                }
                <div className="w-full flex gap-3 h-[10%]">
                    <button className="w-[50%] h-full rounded-2xl bg-red-400 font-bold" onClick={()=>{sethide(!hide)}}>Cancel</button>
                    <button className="w-[50%] h-full rounded-2xl bg-red-400 font-bold" onClick={()=>(changeit(false))}>Continue</button>
                </div>

            </div>)}
        </div>
    )
}

export default Page
