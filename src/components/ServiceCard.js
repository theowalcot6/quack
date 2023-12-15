import React from "react"
import './ServiceCard.css'

const ServiceCard = ({title, image}) => {

  return (
      <div className='service_card'>
        <div className='service_card_image_container'>
            <img src={image} alt='service_card_image'></img>
        </div>
        <h1>{title}</h1>
        </div>
  )
}

export default ServiceCard;