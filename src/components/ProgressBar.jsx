import React from 'react'
import { useState, useEffect } from 'react';

function ProgressBar() {

  const [ scrollTop, setScrollTop ] = useState();

  useEffect(() => {
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
  },[])

  const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll/height)*100;
      setScrollTop(scrolled)
  }

  return (
    <div className='w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px] h-full mb-4 z-0'>
      <div className= 'bg-red-400 transition-all ease-out duration-1000' style={{height: `${scrollTop}%`}}></div>
    </div>
  )
}

export default ProgressBar
