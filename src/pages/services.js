import Page from "./page"
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Services = () => {
    return (
      <>
      <Navigation/>
        <Page
        title="Services"
        content={`Cras ultrices pretium ante a pharetra. Pellentesque tempor viverra elit a cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`}
      />
      <Footer/>
      </>
)};

export default Services