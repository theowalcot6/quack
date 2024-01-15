import React from "react"
import Page from "../../components/Page.js"
import casestudy from "../../data/casestudy.js"

const { case1, ...otherCases } = casestudy;

const CaseStudy5 = () => {
  const coredata = case1
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

export default CaseStudy5;