import Navigation from "../components/Navigation";
import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <>
            <Navigation />
            <form className='contact-form' name="contact" action='/' method="POST" data-netlify="true">
                <div>
                    <label htmlFor="name">
                        Your Name:
                        <input name='name' type='text' id="name" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Your Email:
                        <input name='email' type='email' id="email" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        Your Message:
                        <textarea name='message' id="message" required />
                    </label>
                </div>
                <div>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </>
    );
};

export default Contact;
