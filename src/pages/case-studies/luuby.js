import React from "react"
import Page from "../../components/Page.js"
import casestudy from "../../data/casestudy.js"

const { case2, ...otherCases } = casestudy;


const CaseStudy2 = () => {

  const coredata = case2
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

export default CaseStudy2;