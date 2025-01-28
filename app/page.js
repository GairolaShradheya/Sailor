"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { get_data } from "./redux/mongodata";

export default function Home() {

  let data = useSelector((state) => state.mongodata.value)
  const dispatch = useDispatch()

  const getdata = async () => {
    try {
      let me = await fetch("https://fakestoreapi.com/products")
      let res = await me.json()
      localStorage.setItem('products', JSON.stringify(res))
    } catch (error) {
      console.log("loading");
    }
    if (data == null) {
          let res = await fetch('api/add/')
          data = await res.json()
          dispatch(get_data(data))
        }
  }

  useEffect(() => {
    getdata()
  }, [])



  return (
    <>

      <div className="w-full min-h-[100vh] flex flex-col p-[20vh] items-center gap-20">
        <div className="text-center ">
          <h2 className="md:text-[80px] text-6xl md:pb-4 pb-10 font-bold">Welcome to Sale<span className="text-violet-500">Sailor</span></h2>
          <p className="md:text-[20px] text-xl">This is a beautiful e-commerce website for all the lovely people.</p>
          <p className="text-[20px]">Have a look at our products.</p>
        </div>
        <Link href={'home'} className='border border-white px-4 py-2 rounded-full flex items-center justify-center font-bold text-xl h-16 w-52 text-center bg-purple-700'>
          <span>Get Started</span>
          <div className="invert flex items-center justify-center w-[20%] fill-white">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" color="#000000" fill="none">
              <path d="M14 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
        <div className=" flex flex-col w-[90vw] gap-[10vh]">
          <div className="flex md:flex-row flex-col bg-gray-800 md:bg-inherit md:gap-5 rounded-3xl">
            <Image width={600} height={400} src={"/bg.jpg"} alt="Image" className="md:w-[50%]  rounded-3xl "></Image>
            <div className="text-center font-bold text-3xl flex flex-col justify-center items-center font-sans p-10">
              <div>Get all your favorite stuff at your home without taking any problem.</div>
              <div>All your needs are here.</div>
              <div>All the benefits at just one click.</div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col bg-gray-800 md:bg-inherit md:gap-5 rounded-3xl">
            <div className="text-center font-bold text-3xl flex flex-col justify-center items-center font-sans p-10">
              All the electronics items are available here.
            </div>
            <div className="flex md:w-[50%] h-[30vh] md:h-[50vh] bg-white relative rounded-3xl">
              <Image width={600} height={400} src={'/T.V..jpg'} alt="TV photo" className="absolute w-[40%] top-[25%] left-[5%]"></Image>
              <Image width={600} height={400} src={'/T.V.2.jpg'} alt="TV photo2" className="absolute w-[40%] top-[25%] right-[5%]"></Image>
            </div>
          </div>

        </div>
      </div> 
      <div className="grid md:grid-cols-4 w-full bg-gray-900 gap-4 md:gap-0 pb-[10vh] pt-[4vh]">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-bold text-2xl">Pages</h2>
          <Link href={'/home'}>Home</Link>
        </div>
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-bold text-2xl">Message from developer</h2>
          <p>This website and its data is only developed for getting knowledge, it cannot used for buying products.<span className="block">Have a good day.</span></p>
        </div>
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-bold text-2xl">Contribution</h2>
          <p>Slappypro</p>
          <p>guiyiyiyiy</p>
        </div>
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-bold text-2xl">Contact us</h2>
          <div>
            <div className="font-bold">Github:-</div>
            <Link href={'https://github.com/Slappypro'} target="_blank" className="hover:underline hover:text-blue-600 block cursor-pointer">Slappypro</Link>
            <Link href={'https://github.com/guiyiyiyiy'} target="_blank" className="hover:underline hover:text-blue-600 block cursor-pointer">guiyiyiyiy</Link>
          </div>
        </div>
      </div>

    </>
  );
}
