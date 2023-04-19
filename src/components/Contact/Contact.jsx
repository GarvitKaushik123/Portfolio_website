import React, { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';

// import emailjs from '@emailjs/browser';
import './Contact.css';


const Contact = ()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //         setDone(true);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    };
    return ( 
        <div className='contact-form'>
            <div className='w-left'>
                <div className='awesome'>
                    <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur s-blur1' style={{ background: '#ABF1FF94'}}></div>
                </div> 
            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name'></input>
                    <input type='email' name='user_email' className='user' placeholder='Email'></input>
                    <textarea name='message' className='user' placeholder='Message'></textarea>
                    <input type='submit' value='Send' className='button'></input>
                    <div className='blur c-blur1' style={{background: "var(--purple)"}}></div>
                    <span>{done && "Thanks for contacting me."}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact;