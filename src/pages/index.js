import "./styles.css";

import React from "react";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Work from "../components/Work";


const IndexPage = () => {

  return (
    <>
      <Navigation/>
      <Main/>
      <Work/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
