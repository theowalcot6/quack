import "../main_page_sections_stylings/Brands.css";

import React from "react";

import img from '../../images/image 149.png'
import img1 from '../../images/image 150.png'
import img2 from '../../images/image 152.png'
import img3 from '../../images/image 181.png'
import img4 from '../../images/image 182.png'


const Brands = () => {

  return (
    <div class='brands'>
        <img src={img} alt='brand_logo' width='140'/>
        <img src={img1} alt='brand_logo' width='140'/>
        <img src={img2} alt='brand_logo' width='140'/>
        <img src={img3} alt='brand_logo' width='140'/>
        <img src={img4} alt='brand_logo' width='140'/>
    </div>
  )
}

export default Brands