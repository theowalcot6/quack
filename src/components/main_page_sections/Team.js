import "../main_page_sections_stylings/Team.css";
import Theo from '../../images/Theo.png'
import Ravi from '../../images/Ravi.png'
import James from '../../images/James.png'


import React from "react";


const Team = () => {

  return (
    <div class='team'>
        <h2>Our Team</h2>
        <div class='team_card_container'>
            <div class='team_card'>
                <img src={Ravi} alt='Ravi'/>
                <p><b>Ravi Ambasana</b><br></br> CEO and Andrew's Son</p>
            </div>
            <div class='team_card'>
                <img src={Theo} alt='Theo'/>
                <p><b>Theo Walcot</b><br></br> Software Developer</p>
            </div>
            <div class='team_card'>
                <img src={James} alt='James'/>
                <p><b>James Parison</b><br></br> UX Designer</p>
            </div>
        </div>
    </div>
  )
}

export default Team