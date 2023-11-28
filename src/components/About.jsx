import React from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { TypeAnimation } from 'react-type-animation'

function About() {
  return (
    <div className='mx-4 text-center flex flex-col items-center mt-[-128px]'>
      <div className='mt-32 flex flex-col items-center z-0'>
        <BiSolidQuoteAltLeft className='bg-red-400 p-3 text-[44px] my-4 rounded-full'/>
        <p className='text-[14px]'>Transitioning from a background in Education Management to Software Development, I am discovering a deep passion for the rewarding and intellectually stimulating world of coding. My intrinsic curiosity about how things function drives my motivation, and I find coding provides the mental challenge I crave. With a track record of determination and resilience, I am eager to contribute to a team with a strong learning culture, where I can further enhance my development skills and create Software that positively impacts people’s lives. The combination of problem-solving and meaningful impact in programming excites me, and I look forward to the opportunity of starting my career in Tech.</p>
        <BiSolidQuoteAltRight className='bg-red-400 p-3 text-[44px] my-4 rounded-full'/>
      </div>

      <div className='text-xl'>
      <TypeAnimation
      sequence={[
        'Teacher of Maths and Leader in Education turned Junior Software Developer',
        2000, 
        'Teacher of Maths and Leader in Education turned Junior Frontend Developer',
        2000,
        'Teacher of Maths and Leader in Education turned Junior Backend Developer',
        2000,
        'Teacher of Maths and Leader in Education turned Junior Full Stack Developer',
        2000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      />
      </div>

    </div>
  )
}

export default About
