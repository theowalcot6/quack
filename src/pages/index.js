import "./styles.css";
import "../components/Navigation.css"

import React from "react";
import Main from "../components/main_page_sections/Main";
import Work from "../components/main_page_sections/Work";
import Services from "../components/main_page_sections/Services";
import Process from "../components/main_page_sections/Process";
import AboutUs from "../components/main_page_sections/AboutUs";
import Contact from "../components/main_page_sections/Contact";

import { useRef } from "react";
import Team from "../components/main_page_sections/Team";
import Footer from "../components/main_page_sections/Footer";
import Brands from "../components/main_page_sections/Brands";

const IndexPage = () => {
  const mainRef = useRef(null);
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)

  const refsMap = {
    'Work':workRef,
    'Services':servicesRef,
    'Process' : processRef,
    'About' : aboutRef,
    'Team' : teamRef,
    'Contact' : contactRef
    // Add refs for other sections as needed
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
      };
      ref.current.scrollIntoView(scrollOptions);
    }
  };

  return (
    <>
      <div class='Navigation'>
          <h1>LOGO</h1>
          <ul className='navigation-links'>
              {Object.keys(refsMap).map((link) => (
                  <li
                  type="button"
                  class={`nav-link ${link}`}
                  onClick={() => scrollToSection(refsMap[link])}
                  >
                  {link}
                  </li>
              ))}
          </ul>
          <button onClick={() => scrollToSection(contactRef)}>Get in touch with us</button>
      </div>
      <div ref={mainRef}>
        <Main />
        <button class='lets-talk' onClick={() => scrollToSection(contactRef)}>Let's talk!</button>
      </div>
      <Brands/>
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={processRef}>
        <Process />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={teamRef}>
        <Team />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Quack Agency</title>
