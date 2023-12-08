import "../pages/styles.css";
import { useState } from "react";
import { Link } from 'gatsby'

import React from "react";

const links = ["about", "portfolio", "services", "contact"];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpen = isMenuOpen ? "open" : "";

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu"></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
            {links.map((link, index) => (
                <Link
                key={link}
                className={isMenuOpen ? "appear" : ""}
                style={{ animationDelay: `0.${index + 1}s` }}
                to={`/${link}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {link}
                </Link>
            ))}
        </nav>
      </div>
    </>
  );
};
export default Navigation