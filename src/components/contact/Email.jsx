import React from 'react'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

export default function Email({children}) {
  return (
    <Link href={'/'}  className='w-full flex items-center text-text-mute gap-2'>
              <MdEmail className='text-2xl ' />
              <p>
                {children}
              </p>
            </Link>
  )
}
