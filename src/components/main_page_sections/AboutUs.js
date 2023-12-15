import "../main_page_sections_stylings/AboutUs.css";
import about from '../../images/about.png'
import about1 from '../../images/about1.png'
import about2 from '../../images/about2.png'


import React from "react";


const AboutUs = () => {

  return (
    <div class='about'>
        <div class='about-whole-image-container'>
            <div class='about-first-image-container'>
                <img src={about1} alt='about-image'/>
            </div>
            <div class='about-second-image-container'>
                <img src={about} alt='about-image'/>
                <img src={about2} alt='about-image'/>
            </div>
        </div>
        <div class='about-right-side'>
            <h2>About Us</h2>
            <p>Concept Softworks is a software company, we develop custom built software for clients - covering everything from financial institutions & medical companies all the way to tech companies and government organizations.</p>
        </div>
    </div>
  )
}

export default AboutUs