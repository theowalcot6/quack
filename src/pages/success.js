import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/logo.png'
import './styles.css'

const SuccessPage = () => {
  return (
    <div className='success'>
        <img src={logo} alt='logo' height='120'/>
        <h1>Thank you!</h1>
        <p>Someone will be in touch to discuss your project request</p>
        <Link to="/"><button>Back to site</button></Link>
    </div>
  )
}

export default SuccessPage