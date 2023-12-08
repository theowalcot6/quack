import Navigation from "../components/Navigation";
import Page from "./page"
import React from "react";

const Contact = () => {
    return (
        <>
        <Navigation/>
        <Page
            title="Contact"
            content={`Nullam feugiat, quam at fermentum tempor, ante lectus vestibulum tellus, facilisis volutpat libero enim eu lorem. Morbi porta vitae lacus sed euismod. Duis maximus dolor elit, vel porta risus condimentum id. In sagittis, ipsum eget euismod porta, risus massa laoreet nibh, ac volutpat magna neque et diam. `}
        />
    </>
)};

export default Contact