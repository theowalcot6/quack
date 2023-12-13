import ProjectCard from "./ProjectCard";
import "./Work.css";

import React from "react";

const projects = {
    'project1': {
        'name': 'project1',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research']
    },
    'project2': {
        'name': 'project2',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research']
    },
    'project3': {
        'name': 'project3',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research']
    },
    'project4': {
        'name': 'project4',
        'description': 'blah blah blah',
        'tags': ['Web Design', 'Web Development', 'Research']
    }
}

const Work = () => {
    return (
        <div className='work'> {/* Use 'className' instead of 'class' in JSX */}
            {Object.values(projects).map(project => (
                <ProjectCard key={project.name} title={project.name} description={project.description} tags={project.tags} />
            ))}
        </div>
    )
}

export default Work;