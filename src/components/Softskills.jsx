import React from 'react'

import { Reveal } from '../reveal';

function Softskills() {

  return (
    <div id='skills' className='px-12 mt-12 mb-28'>
      <Reveal>
        <div className='flex items-center'>
          <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
          <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
          <div className='text-4 font-bold'>Skills</div>
          <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
          <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
        </div>
        <h2 className='my-5 text-center'>Working tirelessly in Education for 7 years to reach management level, and showing determination and resilience in the Northcoders Bootcamp has given me a wide range of invaluable transferable skills that include:</h2>
        <div className='text-center'>
          <p>Team Work</p>
          <p>Leadership</p>
          <p>Problem Solving</p>
          <p>Collaberation</p>
          <p>Working in an Agile Environment</p>
          <p>Technical Communication</p>
          <p>Self Evaluation</p>
          <p>Working in a Fast Paced Environment</p>
        </div>
      </Reveal>
  </div>
  )
}

export default Softskills
