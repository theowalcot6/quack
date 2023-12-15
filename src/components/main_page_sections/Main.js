import "../main_page_sections_stylings/Main.css";
import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    const parallaxItem = document.querySelector('.main-center h1');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 + scrollPosition / 1000; // Adjust the scale factor as needed

      parallaxItem.style.transform = `scale(${scaleValue})`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className='main'>
      <div className='main-center'>
        <h1>Let's make <br />software together!</h1>
      </div>
    </div>
  );
};

export default Main;
