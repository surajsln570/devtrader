"use client"
import Container from '../Container.jsx'
import { IoMenu } from "react-icons/io5"
import Links from './comp/Links'
import { MdClose } from "react-icons/md"
import { useState } from 'react'
import logo from '@/assets/logo1.jpg'
import Image from 'next/image.js'
import AddProject from './comp/AddProject.jsx'

export default function Navbar() {
  const [menu, setMenu] = useState(false)
      const [addProject, setAddProject] = useState(false)

  return (
    <>
    {addProject && <AddProject setAddProject={setAddProject}/>}
      {/* Navbar */}
      <Container className={`h-[80px] z-40 fixed w-full px-6 justify-between 
      bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg`}>

        {/* Logo */}
        <Container className="justify-start gap-3 w-[40%] p-0">
          <a
            href="/"
          >
    <Image src={logo} loading="eager" alt="" className="h-[50px] w-[220px] hover:scale-105 transition-all duration-300 object-cover z-50 rounded-lg" />
          </a>
        </Container>

        {/* Desktop Links */}
        <Links setAddProject={setAddProject} setMenu={setMenu} className="gap-3 hidden md:flex text-white" />

        {/* Mobile Button */}
        {menu ? (
          <MdClose
            onClick={() => setMenu(false)}
            className="text-white cursor-pointer z-[100] text-4xl md:hidden hover:scale-110 transition"
          />
        ) : (
          <div>
            <IoMenu
            onClick={() => setMenu(true)}
            className="text-white text-4xl z-[100] cursor-pointer md:hidden hover:scale-110 transition"
          />
          </div>
        )}
      </Container>

      {/* Mobile Menu */}
    {menu && <div onClick={() => setMenu(false)} className='md:hidden fixed w-full h-screen z-20'></div>}
      <div
        className={`fixed top-[80px] left-0 h-[85vh] overflow-auto w-[75vw] 
        bg-black/80 backdrop-blur-md border-r border-white/10
        transform md:hidden transition-transform duration-300 z-40
        ${menu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div >
          <Links setAddProject={setAddProject} setMenu={setMenu}
          className="flex-col justify-start items-start gap-6 pt-10 pl-6 text-lg text-white"
        />
        </div>
      </div>
    </>
  )
}
