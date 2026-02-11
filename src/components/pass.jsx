import React from 'react'
import Container from './Container'

export default function Pass({handlePass, pass, className}) {
  return (
    <Container className={`bg-white z-40 justify-center rounded-lg w-[300px] h-[150px] ${className}`}>
            <form action="">
              <input
                className='w-full bg-gray-100 focus:bg-white border rounded-lg p-3 outline-none'
                value={pass}
                onChange={handlePass}
                type="password"
                placeholder='Enter Password'
              />
            </form>
          </Container>
  )
}
