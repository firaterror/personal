import React from 'react'
import { FiAlignJustify,FiMoon } from "react-icons/fi";

export default function Options() {
  return (
    <div className='flex flex-row justify-end pt-10 responsive-screen'>
      <ul className='flex space-x-3'>
        <li className='bg-buttonbackground border-bordercolor border rounded-full py-2 px-5 cursor-pointer'>
          <FiAlignJustify/>
        </li>
        <li className='bg-buttonbackground border-bordercolor border rounded-full py-2 px-5 cursor-pointer'>
          <FiMoon />
        </li>
      </ul>
    </div>
  )
}
