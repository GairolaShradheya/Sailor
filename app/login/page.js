"use client";
import { signIn } from "next-auth/react";
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

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      redirect("/"); // Redirect to homepage or dashboard
    } else {
      setError("Invalid email or password");
    }
    console.log(session);
  };

  if(session){
    redirect("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-black">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
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
