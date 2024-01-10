import React from "react"
import './ProjectCard.css'
import { Link } from "gatsby";

const ProjectCard = ({title, description, tags, background, link}) => {
  /*const [isFlipped, setIsFlipped] = useState(false);*/

  const cardStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'grey',
  };

  /*const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };*/

  return (
    <div className='project_card_outer'>
      <Link to={link} className="project_card_link">
        <div className='project_card' style={cardStyle}>
          <div>
          </div>
          <h1>{title}</h1>
          <p >{description}</p>
        </div>
        </Link>
    </div>
  )
}

export default ProjectCard;