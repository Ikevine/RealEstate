import React from 'react'

export default function Button({bgcolor, content}) {
  return (
    <button
      className={`${bgcolor}  rounded-md text-white px-14 py-2`}
    >
     {content}
    </button>
  )
}
