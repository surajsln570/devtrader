import React from 'react'

export default function Container({className, children}) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {children}
    </div>
  )
}
