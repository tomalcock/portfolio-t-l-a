import React from 'react'

function Contact() {
  return (
    <div id='contact'className='px-12 mt-12 text-center'>
      <div className='flex items-center'>
        <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <div className='text-[24px] font-bold'>Contact</div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
      </div>
      <div className='my-5'>
        <p>07972309487</p>
        <p>alcocktom94@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact