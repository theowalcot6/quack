import "../pages/styles.css";
import "./Navigation.css"

import React from "react";

const links = ["Work", "Services", "Process", "About Us", "Team", "Contact"];

const Navigation = () => {

  return (
    <div class='Navigation'>
        <h1>LOGO</h1>
        <ul class='navigation-links'>
            {links.map((link) => (
                <li
                key={link}
                >
                {link}
                </li>
            ))}
        </ul>
        <button>Get in touch with us</button>
    </div>
  );
};
export default Navigation