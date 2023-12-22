import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import "../main_page_sections_stylings/Work.css";

import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";

const projects = {
  project1: {
    name: "project1",
    description: "blah blah blah",
    tags: ["Web Design", "Web Development", "Research"],
    image: card1,
  },
  project2: {
    name: "project2",
    description: "blah blah blah",
    tags: ["Web Design", "Web Development", "Research"],
    image: card2,
  },
  project3: {
    name: "project3",
    description: "blah blah blah",
    tags: ["Web Design", "Web Development", "Research"],
    image: card3,
  },
  project4: {
    name: "project4",
    description: "blah blah blah",
    tags: ["Web Design", "Web Development", "Research"],
    image: card4,
  },
};

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
    ? Object.values(projects)
    : Object.values(projects).slice(0, 2);

  return (
    <div className="work">
      <h2>Our Work</h2>
      <div className="project-cards-container">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            tags={project.tags}
            background={project.image}
          />
        ))}
        {(!showAllCards && typeof window !== 'undefined' && (window.innerWidth < 931)) ? (
          <button onClick={() => setShowAllCards(true)}>View all projects</button>
        ) : null}
        {(showAllCards && typeof window !== 'undefined' && (window.innerWidth < 931)) ? (
          <button onClick={() => setShowAllCards(false)}>View less projects</button>
        ) : null}
      </div>
    </div>
  );
};

export default Work;
