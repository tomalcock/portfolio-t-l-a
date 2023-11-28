import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';import 'reactjs-popup/dist/index';
import Popup from 'reactjs-popup';
import Email from './Email.jsx'

export default function Header() {
    const menu = [
        {
            id: 'skills',
            name:"SKILLS",
        },
        {
            id: 'projects',
            name: "PROJECTS",
        },
        {
            id: 'contact',
            name: "CONTACT"
        } 
    ];
    
    return (
        <div className='header flex items-center fixed w-full justify-between border-b-[1px] z-10'>
            <div className='w-[90px] h-[90px] bg-black'>
                <img src='/logotla.png'
                className='p-2'/>
            </div>
        
            <div className='hidden md:flex gap-20 items-center'>
                {menu.map((item) => (
                 <div key={item.name} className='cursor-pointer hover:underline'>
                    <Link to={`#${item.id}`}>{item.name}</Link>
                </div>
                ))}
            </div>

            <Popup trigger=
            {<div className='w-[90px] h-[90px] bg-red-400 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            </div>}
            modal nested>
                {close => (
                    <div className='modal bg-black flex flex-col items-center rounded py-4'>
                        <Email />
                        <div>
                             <button className='m-auto text text-xs' onClick={() => close()}>Close</button>
                         </div>
                    </div>
                    )
                }
            </Popup>
        </div>
    )
}