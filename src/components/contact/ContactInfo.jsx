import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Phone from './Phone';
import Email from './Email';
import Address from './Address';

export default function ContactInfo() {
  return (
    <div className='p-5 w-full'>
          <h1 className='text-3xl p-2 border-gray-400 w-full border-b'>Contact Info</h1>
          <div>
            <h2 className='text-[#d6d610] text-lg font-bold'>Adrress:</h2>
            <Address className={'border-b'}/>
            <h2 className='text-[#d6d610] text-lg font-bold'>Phone:</h2>
            <div className='border-gray-400 w-full border-b py-2'>
              <Phone>+919598063467</Phone>
              <Phone>+919453622570</Phone>
            </div>
            <h2 className='text-[#d6d610] text-lg font-bold'>Email:</h2>
            <div className='border-gray-400 w-full border-b py-2'>
              <Email>surajsln570@gmail.com</Email>
              <Email>surajchauhansln@gmail.com</Email>
            </div>

          </div>
        </div>
  )
}
