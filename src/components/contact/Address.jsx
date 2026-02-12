import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'

export default function Address({className}) {
    return (
        <div className={`border-gray-400 w-full  flex items-center text-text-mute gap-2 py-2 ${className}`}>
            <IoHomeSharp className='text-xl' />
            <p>
                Founder-RamTej Chauhan, Village-Chamurkha, Post-Kurebhar, Dist-Sultanpur, UP-228151
            </p>
        </div>
    )
}
