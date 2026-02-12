"use client"
import Container from '@/components/Container'
import React, { useState } from 'react'
import pic1 from '@/assets/logo1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { MdDelete } from "react-icons/md"
import { deleteProject } from '@/fetch/project.api'
import Pass from '@/components/pass'

export default function OurProjImage({ oneTypeProj }) {
  const [pass, setPass] = useState('');

  if (!oneTypeProj || oneTypeProj.length === 0) return null
  const [oneProj, setOneProj] = useState(oneTypeProj);
  const handleDelete = async (id) => {
    try {
        const res = await deleteProject(id)
        setOneProj(prev => prev.filter(proj => proj._id !== id))
        alert(res.message)
    } catch (error) {
      console.log(error)
    }
  }
  const [visible, setVisible] = useState(false);
  const [Id, setId] =useState('')
  const handlePass = async (e) => {
    const { value } = e.target
    setPass(value)
    checkPass(value)
  }
   const checkPass = async (password) => {
    if (password === 'ram@123') {
      await handleDelete(Id)
      setVisible(false)
    }
  }
  const handleClick = async (e, id)=>{
    e.preventDefault();
    setVisible(true)
    setId(id)
  }


  return (
    <Container className='flex-col w-full px-2 md:px-[100px]'>
      {visible &&  <div
        onClick={() => setVisible(false)}
        className="absolute inset-0 z-30 bg-black/60 backdrop-blur-xs"
      />}
      {visible  && <Pass pass={pass} className={'fixed bottom-[200px]'} handlePass={handlePass}/>}
      <h1 className='text-2xl font-semibold w-full md:w-[85vw] mb-5 border-b-3 border-yellow-500'>
        {oneProj[0].projectType}
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {oneProj.map((im, i) => (
          im && (
            <Link
              href={`/${im.projectType}`}
              key={i}
              className='mb-5 relative cursor-pointer mx-auto'
            >
              <div className='relative'>

                <Image
                  className='md:w-[30vw] w-[90vw] h-[200px] object-cover bg-red-500 z-10'
                  width={2400}
                  height={2000}
                  src={im.projectImage}
                  alt="project image"
                  loading="eager"
                />

                <MdDelete
                  onClick={(e)=>handleClick(e,im._id)}
                  className='absolute right-0 z-20 text-xl md:text-2xl text-white hover:scale-105 transition-all duration-300 top-0'
                />
              </div>

              <Container className='absolute w-full z-10 bg-gradient-to-r from-red-400 to-gray-400 text-xs mx-auto bottom-0 md:font-bold border justify-between'>
                <p className='pl-1'>{im.city}</p>
                <p>{im.state}</p>

                <Image
                  className='md:w-[70px] h-[25px] w-[50px] md:h-[35px]'
                  src={pic1}
                  alt="logo"
                  loading="eager"
                />
              </Container>
            </Link>
          )
        ))}
      </div>
    </Container>
  )
}
