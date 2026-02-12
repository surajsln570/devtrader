"use client"
import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/appContext";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" text-gray-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <Navbar />
          <main className="w-full relative top-[80px]">
            <Link className='fixed z-50 right-5 bottom-5' href={"https://wa.me/+919598063467"}><BsWhatsapp className='text-5xl bg-[green] text-white rounded-t-full rounded-br-full' /></Link>

            {children}
          </main>
          <Footer className={'relative top-[80px]'} />
        </AppProvider>
      </body>
    </html>
  );
}
