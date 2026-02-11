import React from 'react'
import pic1 from '@/assets/pic1.jpg'

export default function PageHeading({ children }) {
  return (
    <div
      className="h-[100px] md:h-[250px] flex justify-center items-center text-4xl md:text-7xl bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${pic1.src})` }}
    >
      <p className='z-10 text-white'>{children}</p>
    </div>
  )
}
