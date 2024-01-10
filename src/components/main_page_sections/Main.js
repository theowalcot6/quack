import "../main_page_sections_stylings/Main.css";
import React from "react";

const Main = ({mainRef, contactRef}) => {
  /*useEffect(() => {
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
  }, []); // Empty dependency array means this effect runs once after the initial render*/

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
    <div className='main' ref={mainRef}>
      <div className='main-center'>
        <h1>Delivering your <b>digital</b> transformation</h1>
        <p>Innovate. Design. Deliver. Your software, our expertise.</p>
        <button class='lets-talk' onClick={() => scrollToSection(contactRef)}>Let's talk!</button>
      </div>
    </div>
  );
};

export default Main;
