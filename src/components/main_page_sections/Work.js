import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import "../main_page_sections_stylings/Work.css";

import casestudy from "../../data/casestudy";
import { Link } from "gatsby";

const Work = () => {
  const [showAllCards, setShowAllCards] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowAllCards(window.innerWidth >= 931);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleProjects = showAllCards
    ? Object.values(casestudy).slice(0, 4)
    : Object.values(casestudy).slice(0, 2);

  return (
    <div className="work">
      <h2>Our Work</h2>
      <div className="project-cards-container">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            background={project.backgroundImage}
            link={`case-studies${project.link.substring(2)}`}
          />
        ))}
        {/*
        {(!showAllCards && typeof window !== 'undefined' && (window.innerWidth < 931)) ? (
          <button onClick={() => setShowAllCards(true)}>View more projects</button>
        ) : null}
        {(showAllCards && typeof window !== 'undefined' && (window.innerWidth < 931)) ? (
          <button onClick={() => setShowAllCards(false)}>View less projects</button>
        ) : null}
        */}
        <Link to='/case-studies' className='link-text'>See all projects &nbsp; &gt;</Link>

      </div>
    </div>
  );
};

export default Work;
