"use client"
import { SessionProvider } from "next-auth/react";

function AllSession({ children }) {
    
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AllSession
