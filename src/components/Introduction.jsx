import React from 'react'
import tomCv from '/tomCv.pdf'

function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='h-[120px] border-r-[1px] mt-20'></div>
        <div className='w-[5px] h-[5px] bg-white rounded-full'></div>
        <h2 className='mt-5 text-white font-medium text-[13px] tracking-widest'>Hi! My name is</h2>
        <h2 className='text-5xl my-4 font-bold text-white tracking-widest text-center flex justify-center flex-col items-center'>TOM<br></br>LACY-ALCOCK</h2>
        <a className='button mt-2' href={tomCv}>Download my CV</a>
    </div>
  )
}

export default Introduction
