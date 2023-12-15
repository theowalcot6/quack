import React from "react"
import './ProjectCard.css'
import { useState } from "react";

const ProjectCard = ({title, description, tags, background}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'grey',
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project_card_outer ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className='project_card' style={cardStyle}>
          <div>
          </div>
          <h1 className={isFlipped ? 'show' : ''}>{title}</h1>
          <p className={isFlipped ? 'show' : ''}>{description}</p>
          <p className={isFlipped ? 'show' : ''}>{tags}</p>
        </div>
    </div>
  )
}

export default ProjectCard;