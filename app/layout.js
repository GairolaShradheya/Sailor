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
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[100vw] overflow-x-hidden relative bg-slate-950`}
      >
        <MyProvider>
          <AllSession>
            <Navbar />
            <div className="relative w-full  text-white">
              {children}
            </div>
            <Footer />
          </AllSession>
        </MyProvider>
      </body>
    </html>
  );
}
