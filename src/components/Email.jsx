import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

function Email() {

    const [ emailSent, setEmailSent ] = useState(false)
    const [ buttondisabled, setButtonDisabled ] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);
        setEmailSent(true);
        setButtonDisabled(true);

    }

    return (
        <form className='flex flex-col px-4'onSubmit={sendEmail}>
            <label htmlFor="emailFrom">Your Email</label>
            <input 
            type="text"
            id="email-input"
            aria-label="input-field for email address"
            name="email_from"
            className='my-2 px-1 rounded focus:ring-red-400 focus:outline-none focus:ring-2 text-black'
            />
            <label htmlFor="emailMessage">Message</label>
            <textarea 
            name='message'
            id='message'
            className='message_box h-96 px-1 rounded  focus:ring-red-400 focus:outline-none focus:ring-2 text-black'
            aria-label='input field for email message'
            ></textarea>
            <button 
            className='my-4 border-2 border-white rounded hover:scale-110'
            disabled={buttondisabled}
            >Send Email</button>
            {emailSent? <p>Email sent. Thank you!</p> : null}
        </form>
    )
}

export default Email
