"use client"
import Link from "next/link";

export default function Home() {
  return (
    <>
    
      <div className="w-full h-[100vh] flex flex-col p-20 items-center justify-center gap-10">
        <div className="text-center">
          <h2 className="text-[80px] pb-4  font-bold">Welcome to Sale<span className="text-violet-500">Sailor</span></h2>
          <p className="text-[20px]">This is a beautiful e-commerce website for all the lovely people.</p>
          <p className="text-[20px]">Have a look at our products.</p>
        </div>
        <Link href={'home'} className='border border-white px-4 py-2 rounded-full flex items-center justify-center font-bold text-xl h-16 w-52 text-center bg-purple-700'><span>Get Started</span></Link>
      </div>
      
    </>
  );
}
