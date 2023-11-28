import React from 'react'
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5"

function SideBar() {
  return (
    <div className='w-14 border-r-[1px] h-screen fixed flex flex-col justify-around items-center'>
      <div className='flex flex-col gap-7 mb-10 text-[40px]'>
        <a href="https://github.com/tomalcock" 
        aria-label='to TLA github'><IoLogoGithub className='cursor-pointer hover:scale-110 transition-all ease-in-out my-12'/></a>
        <a href="https://www.linkedin.com/in/tom-lacy-alcock-b28b84283/"
        aria-label='to TLA linked in page'><IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
      </div>
    </div>
  )
}

export default SideBar

