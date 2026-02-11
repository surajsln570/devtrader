"use client"
import { useEffect, useState } from 'react'
import Container from '@/components/Container.jsx'
import { GrNext } from "react-icons/gr"
import Image from 'next/image'
import { useAppContext } from '@/context/appContext'

export default function Slider({projects}) {

  const [visible, setVisible] = useState(0)

  // auto slide
  useEffect(() => {
    if (!projects?.length) return

    const interval = setInterval(() => {
      setVisible(v => (v + 1) % projects.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [projects])

  if (!projects?.length) return null

  return (
    <Container className="relative w-full h-[75vh] overflow-hidden">

      {projects.map((pi, i) => (
        <Image
          key={i}
          src={pi.projectImage}
          alt="project"
          fill
          sizes="100vw"
          priority={i === 0}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${i === visible ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        />
      ))}

      {/* next */}
      <GrNext
        onClick={() => setVisible(v => (v + 1) % projects.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-4xl md:text-5xl text-white drop-shadow-lg"
      />

      {/* prev */}
      <GrNext
        onClick={() => setVisible(v => (v - 1 + projects.length) % projects.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rotate-180 cursor-pointer text-4xl md:text-5xl text-white drop-shadow-lg"
      />

      {/* text overlay */}
      <div className="absolute bottom-5 left-5 text-white space-y-1">
        <p className="text-sm md:text-lg">Hello,</p>
        <p className="text-2xl md:text-4xl font-bold bg-black/40 px-4 py-1 rounded-lg backdrop-blur-sm">
          Contact Us
        </p>
      </div>

    </Container>
  )
}
