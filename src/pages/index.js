import "./styles.css";
import "../components/Navigation.css"

import React from "react";
import { useRef, useEffect } from "react";
import { useState } from "react";

import Main from "../components/main_page_sections/Main";
import Work from "../components/main_page_sections/Work";
import Services from "../components/main_page_sections/Services";
import AboutUs from "../components/main_page_sections/AboutUs";
import Contact from "../components/main_page_sections/Contact";
import Navigation from "../components/Navigation"
import Team from "../components/main_page_sections/Team";
/*import Footer from "../components/main_page_sections/Footer";*/
import Brands from "../components/main_page_sections/Brands";
import MobileNavigation from "../components/MobileNavigation";

const IndexPage = () => {
  const mainRef = useRef(null);
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)

  const refsMap = {
    'Work':workRef,
    'Services':servicesRef,
    'About' : aboutRef,
    'Team' : teamRef,
    'Contact' : contactRef
    // Add refs for other sections as needed
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open,setOpen] = useState(false)

  const stopScroll = (input) => {
    setOpen(input)
  }

  const controlNavbar = () => {
    if (window.scrollY > 107) {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className='app'>
      <div className={`Navigation ${!show && !open ? 'hidden' : ''} `}>
        <div className="navigation-container">
          <Navigation links={refsMap} contactRef={contactRef}/>
        </div>
        <div className='mobile-navigation-container'>
          <MobileNavigation stopScroll = {stopScroll} links={refsMap} contactRef={contactRef}/>
        </div>
      </div>
      <div className='main-container'>
        <Main mainRef={mainRef} contactRef={contactRef} />
      </div>
      <Brands/>
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={servicesRef}>
        <Services />
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
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Quack Agency</title>