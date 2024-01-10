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
        'name': 'Bespoke software development',
        'paragraph' : 'Crafting tailored software solutions to empower your business with efficiency and innovation.',
        'image' : frame5
    },
    'project2': {
        'name': 'Digital Strategy',
        'paragraph' : 'Strategizing digital initiatives to enhance your online presence and drive meaningful engagement.',
        'image' : frame2
    },
    'project3': {
        'name': 'Software Maintenance',
        'paragraph' : 'Ensuring the health and performance of your software systems through dedicated maintenance services.',
        'image' : frame3
    },
    'project4': {
        'name': 'User Research',
        'paragraph' : 'Conducting thorough user research to uncover insights and create user-centric solutions.',
        'image' : frame4
    },
    'project5': {
        'name': 'Digital Marketing',
        'paragraph' : 'Boosting your brand visibility and reach through strategic digital marketing campaigns.',
        'image' : frame1
    },
    'project6': {
        'name': 'Design and Creative',
        'paragraph' : 'Unleashing creativity and design excellence to bring your visions to life with our expert team.',
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