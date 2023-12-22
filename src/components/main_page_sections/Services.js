import React, { useState, useEffect } from "react";
import '../main_page_sections_stylings/Services.css'

import frame1 from '../../images/Frame 18.png'
import frame2 from '../../images/Frame 19.png'
import frame3 from '../../images/Frame 20.png'
import frame4 from '../../images/Frame 22.png'
import frame5 from '../../images/Frame 23.png'
import frame6 from '../../images/Frame 24.png'

const services = {
    'project1': {
        'name': 'Team Survey & Reports',
        'paragraph' : 'Short, anonymous surveys track your team’s needs weekly so you can focus.',
        'image' : frame1
    },
    'project2': {
        'name': 'Collaborative 1:1',
        'paragraph' : 'Build relationships by planning 1-on-1s and start meetings.',
        'image' : frame2
    },
    'project3': {
        'name': 'Learning Center',
        'paragraph' : 'Quickly get solutions tailored to your personal challenges from the manager.',
        'image' : frame3
    },
    'project4': {
        'name': 'Anonymous Messaging',
        'paragraph' : 'Develop trust in a safe channel for important conversations.',
        'image' : frame4
    },
    'project5': {
        'name': 'Conversation Engine',
        'paragraph' : 'Communicate confidently with recommended talking points.',
        'image' : frame5
    },
    'project6': {
        'name': 'Exclusives Manager',
        'paragraph' : 'Access manager tips, activities and best practices from our team of experts.',
        'image' : frame6
    }
}

const Services = () => {
    const [showAllCards, setShowAllCards] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          setShowAllCards(window.innerWidth >= 681);
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
    
      const visibleServices = showAllCards
        ? Object.values(services)
        : Object.values(services).slice(0, 3);

    return (
        <div className='services'>
                <h2>Our Services</h2>
            <div className='service-cards-container'>
                {visibleServices.map(service => (
                    <div className='service-container'>
                    <img src={service.image} alt='service-logo'/>
                    <h6>{service.name}</h6>
                    <p>{service.paragraph}</p>
                    </div>
                    ))}
                {(!showAllCards && typeof window !== 'undefined' && (window.innerWidth < 681)) ? (
                <button onClick={() => setShowAllCards(true)}>View all services</button>
                ) : null}
                {(showAllCards && typeof window !== 'undefined' && (window.innerWidth < 681)) ? (
                <button onClick={() => setShowAllCards(false)}>View less services</button>
                ) : null}
            </div>
        </div>
    )
}

export default Services;