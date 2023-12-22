import "../main_page_sections_stylings/Brands.css";

import React from "react";

import img from '../../images/eon-next.png'
import img1 from '../../images/looby.png'
import img2 from '../../images/runna.png'
import img3 from '../../images/nissan.png'
import img4 from '../../images/lolly.png'


const Brands = () => {

  return (
    <div class='brands'>
        <img src={img} alt='brand_logo' width='130'/>
        <img src={img3} alt='brand_logo' width='130'/>
        <img src={img2} alt='brand_logo' width='130'/>
        <img src={img4} alt='brand_logo' width='130'/>
        <img src={img1} alt='brand_logo' width='130'/>
    </div>
  )
}

export default Brands