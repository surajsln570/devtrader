"use client"
import React, { useState } from 'react'
import Container from '../../Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Links({ className, setMenu, setAddProject }) {
    const pathname = usePathname()
    const services = [
        "Architectural",
        "Civil Construction",
        "Interior",
        "Renovation",
        "Structural assistance",
        "3D Modelling",
        "Cost estimation",
        "Planning",
        "Vaastu consultation"
    ];
    const projects = [
        "Architectural",
        "Civil Construction",
        "Interior",
    ]
    const [serviceOpen, setServiceOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(false);
    

    return (
        <Container className={`${className} h-full w-full justify-end`}>
            <Link
                onClick={()=>setMenu(false)}
                href={'/'}
                className={`${pathname === "/" ? "bg-gray-300 text-black" : "text-white"} ${linkClass}`}
            >
                Home
            </Link>
            <div
                className="relative flex flex-col justify-center  items-start md:items-start md:h-full"
                onMouseEnter={() => setProjectOpen(true)}
                onMouseLeave={() => setProjectOpen(false)}
            >
                <button
                    onClick={() => setProjectOpen(!projectOpen)}
                    className={`text-white ${linkClass}`}
                >
                    Projects ▾
                </button>
                
                    <div className={`md:absolute ${projectOpen ? 'flex opacity-100': 'opacity-0 overflow-hidden absolute md:left-0 left-[-100vw] w-0 h-0'}   md:top-[70px] md:left-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-500 p-4 w-56 shadow-xl  flex-col gap-2 mt-2`}>
                        {projects.map((s, i) => { 
                            return <Link
                                onClick={()=>setMenu(false)}
                                key={i}
                                href={`/${s}`}
                                className="hover:text-cyan-400 transition"
                            >
                                {s}
                            </Link>
                            }
                        )}
                    </div>
                
            </div>
            <div
                className="relative flex flex-col justify-center  items-start md:items-start md:h-full"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
            >

                <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className={`text-white ${linkClass}`}
                >
                    Services ▾
                </button>

                { (
                 <div className={`md:absolute ${serviceOpen ? 'flex opacity-100': 'opacity-0 overflow-hidden md:left-0 left-[-100vw] absolute w-0 h-0'}   md:top-[70px] md:left-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-500 p-4 w-56 shadow-xl  flex-col gap-2 mt-2`}>
                        {services.map((s, i) => (
                            <Link
                                key={i}
                                href={`/services`}
                                className="hover:text-cyan-400 transition"
                                onClick={()=>setMenu(false)}
                            >
                                {s}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Link
                href={'/contact'}
                onClick={()=>setMenu(false)}
                className={`${pathname === '/contact' ? "bg-gray-300 text-black" : "text-white"} ${linkClass}`}
            >
                Contact-Us
            </Link>
            <Link
                href={'/blog'}
                onClick={()=>setMenu(false)}
                className={`${pathname === '/blog' ? "bg-gray-300 text-black" : "text-white"} ${linkClass}`}
            >
                Blog
            </Link>
            <button className={linkClass} onClick={()=>setAddProject(true)} >Add Project</button>
          
        </Container>
    )
}

export const linkClass = `hover:font-bold font-semibold text-lg cursor-pointer hover:bg-gray-300 hover:text-black p-1 md:p-2 rounded-lg transition-all duration-300 hover:scale-102`
