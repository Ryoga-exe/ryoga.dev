import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "src/components/molecules/bio"
import Layout from "src/components/layout"
import SEO from "src/utils/seo"


const About: React.FC<any> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title="About" />
        <Link to="/blog"><h1>Blog</h1></Link>
        <Bio />
      </Layout>
    </React.Fragment>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
