"use client";
import { signIn } from "next-auth/react";
import Loading from "../components/loading";
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation'

export default function LoginPage() {
  let {data:session}=useSession()
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false)
  

  const handleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      setloading(false)
      redirect("/"); 
    } else {
      setloading(false)
      setError("Invalid email or password");
    }
  };

  if(session){
    setloading(false)
    redirect("/");
  }

  

  return (loading)?(<Loading/>):(
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-black">
      <h2 className="text-5xl text-white font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="md:w-[30vw] border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="md:w-[30vw] border p-2 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className=" bg-blue-500 text-white p-2 m-auto  hover:bg-blue-600 border border-white px-4 py-2 rounded-full flex w-[100px] justify-center items-center"
        >
          Login
        </button>
      </form>

      <div className="mt-6">
        <button
          onClick={() => signIn("github")}
          className="bg-black text-white p-2 rounded"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
