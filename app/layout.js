import localFont from "next/font/local";
import "./globals.css";
import AllSession from "./components/session";
import Navbar from "./components/Navbar";
import MyProvider from "./components/provider";
import Footer from "./components/Footer";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SaleSailor",
  description: "The e-commerce website for SaleSailors",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[100vw] overflow-x-hidden relative`}
      >
        <MyProvider>
        <AllSession>
        <Navbar/>
        <div className="relative w-full bg-slate-950 text-white">
          <div className="absolute bottom-0 left-[-20%] right-0 z-[-1] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
          </div>
          {children}
          <div className="absolute bottom-0 right-[-20%] z-[-1] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
          </div>
        </div>
        <Footer/>
        </AllSession>
        </MyProvider>
      </body>
    </html>
  );
}
