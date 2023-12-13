import React from "react"
import './ProjectCard.css'

const ProjectCard = ({title,description,tags}) => {

    return (
      <div class='project_card'>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{tags}</p>
      </div>
    )
  }
  
  export default ProjectCard