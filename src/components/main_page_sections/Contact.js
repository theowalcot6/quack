import "../main_page_sections_stylings/contact.css";

import React from "react";


const Contact = () => {

  return (
    <div class='contact'>
        <div class='contact-support'>
            <h3>Have a project in mind?</h3>
            <h2>Contact us today to find out more about how we can help take your business to the next level</h2>
            <p>Fill out the form to get in touch!</p>
        </div>
        <form className='contact-form' id="contact" name="contact" action='/success' method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className='name-div-form'>
            <input type="text" name='firstname' class='name' required='true' placeholder='First Name' />
            <input type="text" name='secondname' class='name' required='true' placeholder='Last Name' />
          </div>
          <input type="email" name="email" class="email" required='true' placeholder='Email' />
          <input type="phone" name="phone" class="phone" required='true' placeholder='Phone' />
          <textarea name='message' class="message" required='true' placeholder='How can we help you?' />
          <button type="submit">Send Message</button>
        </form>
    </div>
  )
}

export default Contact