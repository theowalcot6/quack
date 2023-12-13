import Navigation from "../components/Navigation";
import React from "react";
import './contact.css';
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <Navigation />
            <form className='contact-form' name="contact" action='#' method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label class='label'>
                    Your Name:
                    <input type="text" name='name' class='name' required='true' placeholder='Your Name' />
                </label>
                <label class='label'>
                    Your Email:
                    <input type="email" name="email" class="email" required='true' placeholder='example@gmail.com' />
                </label>
                <label class='label'>
                    Your Message:
                    <textarea name='message' class="message" required='true' placeholder='message' />
                </label>
                <button type="submit">Send</button>
            </form>
            <Footer/>
        </>
    );
};

export default Contact;
