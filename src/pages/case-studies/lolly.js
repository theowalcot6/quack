import React from "react"
import Page from "../../components/Page.js"
import casestudy from "../../data/casestudy.js"

const { case4, ...otherCases } = casestudy;

const CaseStudy3 = () => {
  const coredata = case4
  const secondarydata = otherCases

  return (
    <>
      <Page 
        coredata={coredata}
        secondarydata={secondarydata}
      /> 
    </>
  )
}

export default CaseStudy3;