import React from 'react'

export default function Input({placeholders}) {
  return (
        <input 
          type="text"
          placeholder={placeholders} 
          className='w-full p-4 bg-slate-50 focus:outline-none '
        />
  )
}
