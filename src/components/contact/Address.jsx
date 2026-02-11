import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'

export default function Address({className}) {
    return (
        <div className={`border-gray-400 w-full  flex items-center text-text-mute gap-2 py-2 ${className}`}>
            <IoHomeSharp className='text-xl' />
            <p>
                5th floor, TS Tower, 15A, Ashok Marg, Hazratganj, Lucknow-226001
            </p>
        </div>
    )
}
