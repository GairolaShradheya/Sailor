"use client"
export default function Home() {
const handleok = async() =>{
  let dat={name: 'sailor',email: 'sailor@me.com',password: 'sailor123'}
  let res = await fetch('/api/add',{method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(dat)})
  let data = await res.json()
  console.log(data);
}

  return (
    <>
      <div className="w-full h-[80vh] flex flex-col p-20 items-center gap-10">
        <div className="text-center">
          <h2 className="text-[80px] pb-4 font-bold">Welcome to Sale<span className="text-violet-500">Sailor</span></h2>
          <p className="text-[20px]">This is a beautiful e-commerce website for all the lovely people.</p>
          <p className="text-[20px]">Have a look at our products.</p>
        </div>
        <button onClick={()=>{handleok()}} className='border border-white px-4 py-2 rounded-full flex items-center bg-purple-700'>Get Started</button>
      </div>
    </>
  );
}
