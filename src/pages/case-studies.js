import React, { useState } from "react";
import "./case-studies.css";

import casestudy from "../data/casestudy.js";
import ProjectCard from "../components/ProjectCard";
import backgroundImage from '../images/case-study-background.png'

import { Link } from "gatsby";

const CaseStudies = () => {
    const caseStudiesArray = Object.values(casestudy);

    // Extract unique involvement values
    const uniqueInvolvements = ['All', ...Array.from(new Set(caseStudiesArray.map(project => project.involvement)))];

    // State to keep track of the selected involvement
    const [selectedInvolvement, setSelectedInvolvement] = useState('All');

    // Function to filter case studies based on involvement
    const filteredCaseStudies = selectedInvolvement === 'All'
        ? caseStudiesArray
        : caseStudiesArray.filter(project => project.involvement === selectedInvolvement);

    const [showmobilemenu,setShowmobilemenu] = useState(false)

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'grey',
    };

    return (
        <div className='CaseStudies'>
            <Link to='/' className='back-to-site'>Back to main page</Link>
            <div className='case-studies-top' style={backgroundStyle}>
                <div className='style-div'></div>
                    <h4>CASE STUDIES</h4>
                    <h2>We are experts in bringing products to life</h2>
                    <h5>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</h5>
            </div>
            <div className='case-studies-filter'>
                <ul>
                    {uniqueInvolvements.map((involvement, index) => (
                        <li
                            key={index}
                            className={selectedInvolvement === involvement ? 'active-filter' : ''}
                            onClick={() => setSelectedInvolvement(involvement)}
                        >
                            {involvement}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='case-studies-filter-mobile'>
                <div className='filter-arrow'>
                    <p className="filter-text" onClick={() => { setShowmobilemenu(!showmobilemenu) }}>Filter</p> {showmobilemenu ? <span className="arrow">▲</span> : <span className="arrow">▼</span>}
                </div>
                {showmobilemenu ? 
                <ul>
                    {uniqueInvolvements.map((involvement, index) => (
                        <li
                            key={index}
                            className={selectedInvolvement === involvement ? 'active-filter' : ''}
                            onClick={() => setSelectedInvolvement(involvement)}
                        >
                            {involvement}
                        </li>
                    ))}
                </ul> : null }
            </div>
            <div className="project-cards-container">
                {filteredCaseStudies.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        background={project.backgroundImage}
                        link={`.${project.link.substring(2)}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default CaseStudies;

