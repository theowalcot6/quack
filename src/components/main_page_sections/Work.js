import ProjectCard from "../ProjectCard";
import "../main_page_sections_stylings/Work.css";

import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'


import React from "react";

const projects = {
    'project1': {
        'name': 'project1',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research'],
        'image' : card1
    },
    'project2': {
        'name': 'project2',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research'],
        'image' : card2
    },
    'project3': {
        'name': 'project3',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research'],
        'image' : card3
    },
    'project4': {
        'name': 'project4',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research'],
        'image' : card4
    }
}

const Work = () => {
    return (
        <div className='work'>
            <h2>Our Work</h2>
            <div className='project-cards-container'>
                {Object.values(projects).map(project => (
                    <ProjectCard key={project.name} title={project.name} description={project.description} tags={project.tags} background={project.image} />
                ))}
            </div>
        </div>
    )
}

export default Work;