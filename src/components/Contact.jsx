import React from 'react'
import { Reveal } from '../reveal';

function Contact() {
  return (
    <Reveal>
    <div id='contact'className='px-12 mt-12 text-center'>
      <div className='flex items-center'>
        <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <div className='text-4 font-bold'>Contact</div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
      </div>
      <div className='my-5'>
        <p>07972309487</p>
        <p>alcocktom94@gmail.com</p>
      </div>
    </div>
    </Reveal>
  )
}

export default Contact
