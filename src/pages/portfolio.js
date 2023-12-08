import Navigation from "../components/Navigation";
import Page from "./page"
import React from "react";

const Portfolio = () => {
    return (
      <>
      <Navigation/>
        <Page
        title="Portfolio"
        content={`Integer semper ligula sit amet quam porttitor, ac sollicitudin orci efficitur. Vivamus eu scelerisque diam, ac lobortis elit. In placerat risus at odio molestie dictum. Aenean iaculis purus ac mattis semper. Mauris venenatis bibendum mauris nec tincidunt. Nunc at interdum enim, id interdum dolor.`}
      />
      </>
)};

export default Portfolio