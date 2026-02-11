import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs"

export default function Phone({children}) {
    return (
        <a href={`https://wa.me/${children}`} className='w-full flex hover:underline transition-all duration-300 items-center text-text-mute gap-2'>
            <BsWhatsapp className='text-xl bg-[#0ccf0c] rounded-lg text-white ' />
            <p>
                {children}
            </p>
        </a>
    )
}
