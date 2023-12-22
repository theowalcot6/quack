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
                <img src={about1} alt='about'/>
            </div>
            <div class='about-second-image-container'>
                <img src={about} alt='about'/>
                <img src={about2} alt='about'/>
            </div>
        </div>
        <div class='about-right-side'>
            <h2>About Us</h2>
            <p>
With over 20 years of direct experience, we are dedicated to assisting you in the efficient and enhanced development of digital products. Having successfully completed over 100 projects, our commitment is underscored by a product-focused approach, ensuring effective problem-solving and innovative solution-building.</p>
        </div>
    </div>
  )
}

export default AboutUs