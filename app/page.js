"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const ref = useRef("");
  return (
    <>
      <div className="w-full h-full flex flex-col p-20 items-center gap-10">
        <div className="text-center">
          <h2 className="text-[80px] pb-4 font-bold">Welcome to Sale<span className="text-violet-500">Sailor</span></h2>
          <p className="text-[20px]">This is a beautiful e-commerce website for all the lovely people.</p>
          <p className="text-[20px]">Have a look at our products.</p>
        </div>
        <button className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Get Started</button>
      </div>
    </>
  );
}
