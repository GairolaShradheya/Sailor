"use client"

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
const handleok = async() =>{
  let data={name: 'sailor',email: 'sailor@me.com',password: 'sailor123'}
  console.log(data);
}

  return (
    <>
    <Navbar/>
      <div className="w-full h-[80vh] flex flex-col p-20 items-center gap-10">
        <div className="text-center">
          <h2 className="text-[80px] pb-4  font-bold">Welcome to Sale<span className="text-violet-500">Sailor</span></h2>
          <p className="text-[20px]">This is a beautiful e-commerce website for all the lovely people.</p>
          <p className="text-[20px]">Have a look at our products.</p>
        </div>
        <button onClick={()=>{handleok()}} className='border border-white px-4 py-2 rounded-full flex items-center justify-center font-bold text-xl h-16 w-52 text-center bg-purple-700'><span>Get Started</span></button>
      </div>
      <Footer/>
    </>
  );
}
