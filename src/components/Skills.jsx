import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5, FaNode } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiJest } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { Reveal } from '../reveal';

function Tooltip({message, children}) {
    return (
        <div className='group'>
            {children}
            <span className='absolute w-36 top-200 scale-0 rounded bg-black p-2 text-xs text-red-400 group-hover:scale-100 z-10'>{message}</span>
        </div>
    )
}

const techDescriptions = {
    React : 'React was used in both of my Frontend Projects to create a news website and a desktop game. I am proficient at making Components, using Props, Conditional Rendering, using Hooks, managing State and much more.',
    Javascript: 'The programming language that is the foundations of everything I have learnt and created over the past year. I have incorporated third part libraries like React and runtime environments such as Node.',
    Tailwind: 'I have started to really enjoy Tailwind and the massive benefits this CSS framework brings to the table. This utility first framework is easy to customize and makes CSS quicker to write and maintain.',
    CSS: 'I have a strong understandong of Vanilla CSS and the mechanisms that underpin understanding rather than just learning tricks to get by. It is the cornerstone of all of my Frontend Projects.',
    HTML: 'This is where I started my learning journey in developement a year a go. Building basic webpages using html has given me the foundational understanding to further explore Frontend technologies.',
    Node: 'None of my Projects would be possible without the power of this asynchronous event-driven Javscript runtime. This was one of the first things I installed when I embarked on my software career change.',
    PostgresQL: 'I used PostgresQL to build my backend Project. I have a good understanding of SQL, the different types of relations between data and how to interact with SQL and NoSQL databases.',
    Firebase: 'I used Firebase in my Pixel Plunge desktop game. This is where I learnt about NoSQL databases and how to set up User Authentication. I have a good understanding of how to allow an Frontend to talk to a firebase Backend and the syntex involved.',
    Jest: 'Breaking code down using the Red Green Refactor process and Test Driven Development is a vital part of the process to ensure software is efficient and errors and can be handled corretly. Jest was just one of the testing frameworks I have used to easily identified errors.'
}

function Skills() {

  return (
    <Reveal>
      <div id='skills' className='px-12 mt-12 mb-28'>
        <div className='flex items-center'>
          <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
          <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
          <div className='text-4 font-bold'>Tech</div>
          <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
          <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
        </div>
        <div className='flex flex-wrap justify-around mt-10'>
          <Tooltip message={techDescriptions.React}>
            <FaReact size={70} />
          </Tooltip>

          <Tooltip message={techDescriptions.Javascript}>
            <IoLogoJavascript size={70} />
          </Tooltip>

          <Tooltip message={techDescriptions.Tailwind}>
            <SiTailwindcss size={70} />
          </Tooltip>

          <Tooltip message={techDescriptions.CSS}>
            <FaCss3Alt size={70} />
          </Tooltip>

          <Tooltip message={techDescriptions.HTML}>
            <FaHtml5 size={70} />
          </Tooltip>

          <Tooltip message={techDescriptions.Node}>
            <FaNode size={70}/>
          </Tooltip>

          <Tooltip message={techDescriptions.PostgresQL}>
            <DiPostgresql size={70}/>
          </Tooltip>

          <Tooltip message={techDescriptions.Firebase}>
            <IoLogoFirebase size={70}/>
          </Tooltip>

          <Tooltip message={techDescriptions.Jest}>
            <SiJest size={70}/>
          </Tooltip>
        </div>
      </div>
    </Reveal>
  )
}

export default Skills;
