import "./MobileNavigation.css";
import { useState } from "react";
import logo from '../images/logo.png'

import React from "react";

const MobileNavigation = ({ links, contactRef, stopScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpen = isMenuOpen ? "open" : "";

  const scrollToSection = (ref) => {
    if (ref.current) {
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
      };
      ref.current.scrollIntoView(scrollOptions);
      setIsMenuOpen(false)
    }
  };

  const overallOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    stopScroll(!isMenuOpen)

    document.documentElement.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  }

  return (
    <>
      <img src={logo} alt='logo' height='50' />
      <button className={`burger ${isOpen}`} onClick={() => overallOpen()} aria-label="Open Menu"></button>
      { isOpen ? (
      <>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <ul className='mobile-navigation-links'>
          {Object.keys(links).map((link) => (
            <li
              key={link} // Don't forget to add a key for each mapped element
              type="button"
              onClick={() => scrollToSection(links[link])}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className='open-menu-CTA'>
          <p className="project-in-mind">Have a project in mind?</p>
          <button onClick={() => scrollToSection(contactRef)} className='mobile-get-in-touch'>Let's talk!</button>
        </div>
      </div>
      </>)
      : null }
    </>
  );
};
export default MobileNavigation