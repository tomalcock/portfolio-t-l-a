import React from 'react'
import { Reveal } from '../reveal';

function Projects() {

function Tooltip({message, children}) {
    return (
        <div className='group'>
            {children}
            <span className='absolute w-36 top-200 scale-0 rounded bg-black p-2 text-xs text-red-400 group-hover:scale-100'>{message}</span>
        </div>
    )
}

const projects = [
  {
    title: 'NC Backend API',
    image: '/nc-backend.png',
    description: 'An API for a news app that can allow you to get, post, delete, patch and much more with articles, comments, topics and users',
    tech: 'PostgresQL, Express, GIT version control',
    github: 'https://github.com/tomalcock/backend-project',
    live: 'https://nc-news-backend-project-ohqj.onrender.com/api'
  },
  {
    title: 'NC News Full Stack Application',
    image: '/nc-news.jpeg',
    description: 'A C.R.U.D fullstack applicaton where a user can browse articles, sort articles, log-in as a dummy user, vote on articles, comment and delete articles',
    tech: 'React, Vite, CSS, GIT version control',
    github: 'https://github.com/tomalcock/nc-news',
    live: 'https://nc-news-tla.netlify.app'
  }, 
  {
    title: 'Pixel Plunge Desktop game',
    image: '/pixel-plunge.png',
    description: "Our Pixel Plunge Desktop Game is built using React, Phaser and Firebase. Users can register an account, sign in or use a guest account. Explore the wonders of the deep sea, catch fish and add them to your fishidex.",
    tech: 'React, Vite, Phaser, Firebase, Tailwind, GIT version control',
    github: 'https://github.com/sting-arrays/pixel-plunge',
    live: 'https://pixel-plunge.netlify.app'
  } 
]
  return (
    <div id='projects' className='px-12 mt-12'>
    <Reveal>
      <div className='flex items-center'>
        <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <div className='text-4 font-bold'>Projects</div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <div className='dot w-[20px] h-[7px] bg-red-400 rounded-full'></div>
      </div>
      </Reveal>
      <ul className='flex flex-wrap justify-center'>
        {projects.map((element) => {
          return (
            <Reveal key={element.title}>
            <li key={element.title} className='flex flex-col justify-center text-center w-64 mx-5 my-4'>
              <p className='my-2 text-lg'>{element.title}</p>
              <Tooltip message='Click to view live!'>
                <a href={element.live}
                alt="four columns of code that show 4 important files for the API">
                  <img className='m-auto cursor-pointer hover:scale-110 transition-all ease-in-out w-32' src={element.image} alt="four columns of code that show 4 important files for the API" />
                </a>
              </Tooltip>
              <p className='my-2 font-bold'>{element.description}</p>
              <p className='my-2 italic'>{element.tech}</p>
              <a href={element.github}>Github repo</a>
            </li>
            </Reveal>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects
