import Navigation from "../components/Navigation";
import Page from "./page"
import React from "react";

const About = () => {
    return (
        <>
        <Navigation/>
        <Page
        title="About"
        content={`Vivamus ullamcorper, nibh ac hendrerit aliquam, tortor mauris tincidunt
    nisi, in sagittis tellus elit non nunc. Duis imperdiet porttitor magna,
    nec aliquet lectus efficitur nec. Maecenas massa nibh, suscipit nec
    pharetra in, feugiat vel est. Nulla quis laoreet justo. Sed at enim quis
    augue vehicula efficitur.`}
        />
    </>
)};

export default About