import "./MobileNavigation.css";
import { useState } from "react";

import React from "react";

const MobileNavigation = ({ links, contactRef }) => {
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

  return (
    <>
      <h1>LOGO</h1>
      <button className={`burger ${isOpen}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu"></button>
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
    </>
  );
};
export default MobileNavigation