import Navigation from "../components/Navigation";
import React from "react";
import './contact.css'

const Contact = () => {
    return (
    <>
        <Navigation/>
        <form class='contact-form' name="contact" method="POST" data-netlify="true">
            <span>
                <label>
                    Name
                    <input type='text'/>
                </label>
            </span>
            <span>
                <label>
                    Email
                    <input name='email' type='email'/>
                </label>
            </span>
            <span>
                <label>
                    Message
                    <textarea name='message' />
                </label>
            </span>
            <span>
                <button type='submit'>Send</button>
            </span>
        </form>
    </>
)};

export default Contact