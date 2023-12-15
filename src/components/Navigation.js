import "../pages/styles.css";
import "./Navigation.css"

import React from "react";

const Navigation = ({links, scrollToSection}) => {
  const handleClick = (link) => {
    scrollToSection(link);
  };

  return (
    <div class='Navigation'>
        <h1>LOGO</h1>
        <ul className='navigation-links'>
            {links.map((link) => (
                <button
                type="button"
                id={link}
                onClick={(link) => handleClick(link)}
                >
                {link}
                </button>
            ))}
        </ul>
        <button>Get in touch with us</button>
    </div>
  );
};
export default Navigation