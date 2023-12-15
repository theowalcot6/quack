import React from "react";
import '../main_page_sections_stylings/Services.css'

import ServiceCard from "../ServiceCard";

import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'

const services = {
    'project1': {
        'name': 'project1',
        'image' : card1
    },
    'project2': {
        'name': 'project2',
        'image' : card2
    },
    'project3': {
        'name': 'project3',
        'image' : card3
    },
    'project4': {
        'name': 'project4',
        'image' : card4
    },
    'project5': {
        'name': 'project5',
        'image' : card1
    },
    'project6': {
        'name': 'project6',
        'image' : card2
    }
}

const Services = () => {
    return (
        <div className='services'>
            <div>
                <h2>Our Services</h2>
                <h6>At LOGO, we know every business is unique, that's why we cater our services to your business needs</h6>
                <p>We offer a wide range of services designed to accelerate your brand’s growth. Tell us what you need, and we’ll make it work for you.</p>
            </div>
            <div className='service-cards-container'>
                {Object.values(services).map(service => (
                    <ServiceCard key={service.name} title={service.name} image={service.image} />
                ))}
            </div>
        </div>
    )
}

export default Services;