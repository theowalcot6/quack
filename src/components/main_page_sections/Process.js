import React from "react";
import '../main_page_sections_stylings/Process.css'
import { useState } from "react";
import arrow from '../../images/Arrow 2.png'

const Process = () => {
    const [selected,setSelected] = useState('Product Design')

    return (
        <div className='process'>
            <div class='process-inner'>
                <h2>Our <br></br>Process</h2>
                <ul className='inner_list_items'>
                    <div className = {`inner_list ${selected === 'Product Design' ? 'active' : 'inactive'}`} onClick={()=>setSelected('Product Design')}>
                        <li >Product Design</li>
                        <img src={arrow} alt='arrow-icon'/>
                    </div>
                    <div className = {`inner_list ${selected === 'Research' ? 'active' : 'inactive'}`} onClick={()=>setSelected('Research')}>
                        <li >Research</li>
                        <img src={arrow} alt='arrow-icon'/>
                    </div>
                    <div className = {`inner_list ${selected === 'Development' ? 'active' : 'inactive'}`} onClick={()=>setSelected('Development')}>
                        <li>Development</li>
                        <img src={arrow} alt='arrow-icon'/>
                    </div>
                    <div className = {`inner_list ${selected === 'Delivery' ? 'active' : 'inactive'}`} onClick={()=>setSelected('Delivery')}>
                        <li >Delivery</li>
                        <img src={arrow} alt='arrow-icon'/>
                    </div>
                </ul>
                {selected === 'Product Design' ? <p>Throughout 2021, the company’s specialists implemented important skill-sharing and community development initiatives as part</p> :null }
                {selected === 'Research' ? <p>Research copy</p> :null }
                {selected === 'Development' ? <p>Development copy</p> :null }
                {selected === 'Delivery' ? <p>Delivery copy</p> :null }
            </div>
        </div>
    )
}

export default Process;