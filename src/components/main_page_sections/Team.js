import "../main_page_sections_stylings/Team.css";

import React from "react";


const Team = () => {

  return (
    <div class='team'>
        <h2>Our Team</h2>
        <div class='team_card_container'>
            <div class='team_card'>
                <b>Ravi Ambasana</b> CEO
            </div>
            <div class='team_card'>
                <b>Theo Walcot</b> Founder and CTO
            </div>
            <div class='team_card'>
                <b>James Parison</b> Founder and Head of Design
            </div>
        </div>
    </div>
  )
}

export default Team