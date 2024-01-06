import React from "react"
import { Link } from "gatsby";
import './Page.css'
import ProjectCard from "./ProjectCard";

const Page = ({ coredata, secondarydata }) => {
  const coverStyle = {
    backgroundImage: `url(${coredata.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const firstimageStyle = {
    backgroundImage: `url(${coredata.firstimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const secondimageStyle = {
    backgroundImage: `url(${coredata.secondimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha (last value) for transparency
  };

  return (
    <div className='page'>
      <div className='page-cover' style={coverStyle}>
        <div style={overlayStyle}></div>
        <h1>{coredata.title}</h1>
        <p>{coredata.description}</p>
      </div>
      <div className='page-brief'>
        <div className='page-brief-left'>
          <h3>The Brief</h3>
          <p>{coredata.brief_description1}</p>
          <br></br>
          <p>{coredata.brief_description2}</p>
        </div>
        <div className='page-brief-right'>
          <h6>Industry</h6>
          <p>{coredata.industry}</p>
          <h6>Location</h6>
          <p>{coredata.location}</p>
          <h6>Involvement</h6>
          <p>{coredata.involvement}</p>
          <h6>Visit</h6>
          <p>{coredata.visit}</p>
        </div>
      </div>
      <div className="page-first-image" style={firstimageStyle}>
      </div>
      <div className='page-outcome'>
          <h3>The Outcome</h3>
          <p>{coredata.brief_description1}</p>
          <br></br>
          <p>{coredata.brief_description2}</p>
      </div>
      <div className="page-first-image" style={secondimageStyle}>
      </div>
      <div className='start'>
        <h1>Start your project</h1>
        <div class="vertical-line"></div>
        <Link to='/#contact'>
          <button className='lets-talk1'>
            Let's get started!
          </button>
        </Link>      
      </div>
      <div className="page-related">
        <h3>Related Projects</h3>
        <div className="page-related-container">
          {Object.values(secondarydata).map((caseData) => (
              <ProjectCard
                key={caseData.title}  // Use a unique key for each case
                title={caseData.title}
                description={caseData.description}
                tags={caseData.tags}
                background={caseData.background}
                link={caseData.link}
              />
            ))}
        </div>
      </div>
      <Link to='/'><h1>LOGO</h1></Link>
    </div>
  );
}

export default Page;