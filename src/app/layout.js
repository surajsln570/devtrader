"use client"
import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/appContext";

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
            {children}
          </main>
          <Footer className={'relative top-[80px]'} />
        </AppProvider>
      </body>
    </html>
  );
}
