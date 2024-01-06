import "./Navigation.css";
import React from "react";
import logo from '../images/logo.png'

const Navigation = ({ links, contactRef }) => {
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
      <img src={logo} alt='logo' height='40'/>
      <ul className='navigation-links'>
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
      <button onClick={() => scrollToSection(contactRef)} className='get-in-touch'>Get in touch with us</button>
    </>
  );
};

export default Navigation;
