import "./styles.css";

import React from "react";
import Navigation from "../components/Navigation";


const IndexPage = () => {
  return (
    <>
      <Navigation/>
      <h1>Test</h1>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
