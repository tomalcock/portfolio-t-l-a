import React from 'react'

import { Reveal } from '../reveal';

function TheNumbers() {

  return (
    <div id='skills' className='px-12 mt-12 mb-28'>
      <Reveal>
        <div className='flex items-center'>
          <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
          <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
          <div className='text-2 font-bold'>Achievements</div>
          <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
          <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
        </div>
        <div className='text-center my-5'>
          <p className='my-5'><span className='text-red-400'>100%</span> of projects delivered on time during the Northcoders bootcamp</p>
          <p className='my-5'><span className='text-red-400'>100%</span> positive feedback as a Tutor with Spires and Tutor Trust</p>
          <p className='my-5'>Reached Management level in <span className='text-red-400'>5</span> years</p>
          <p className='my-5'>As Faculty Leader for Maths and Computer Science, average grades increased from <span className='text-red-400'>4 to 6</span></p>
          <p className='my-5'>Achieved the staff Recognition <span className='text-red-400'>award</span>, autumn 2022</p>
          <p className='my-5'>Increased pupils making expected progress from <span className='text-red-400'>40% to 60%</span></p>
          <p className='my-5'>Recieved <span className='text-red-400'>3</span> Coach of the term <span className='text-red-400'>awards</span></p>
          <p className='my-5'>Gained Outstanding in <span className='text-red-400'>90%</span> of lesson observation in first 4 years of teaching</p>
        </div>
      </Reveal>
  </div>
  )
}

export default TheNumbers;