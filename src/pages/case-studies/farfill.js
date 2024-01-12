import React from "react"
import Page from "../../components/Page.js"
import casestudy from "../../data/casestudy.js"

const { case6, ...otherCases } = casestudy;

const CaseStudy6 = () => {
  const coredata = case6
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

export default CaseStudy6;