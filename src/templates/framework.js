import React from "react"
import Layout from "../components/layout"

const Framework = ({pageContext}) => {
    const framework = pageContext.name

  return (
    <Layout withHero={true}>
      <h1>{framework}</h1>
    </Layout>
  )
}

export default Framework
