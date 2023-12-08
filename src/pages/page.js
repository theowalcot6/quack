import React from "react";

const Page = ({ title, content }) => {
    return (
      <>
        <h2>{title}</h2>
        <p>{content}</p>
      </>
    );
  };

export default Page