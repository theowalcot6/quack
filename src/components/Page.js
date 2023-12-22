import React from "react"
import { Link } from "gatsby";

const Page = ({title, description}) => {

  return (
      <div className='page'>
        <Link to='/'><h1>LOGO</h1></Link>
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
  )
}

export default Page;