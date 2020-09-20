import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/molecules/bio"
import Layout from "../components/layout"
import SEO from "../utils/seo"
import Hero from "../components/organisms/hero"


const TopPage: React.FC<any> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Layout location={location} title={siteTitle}>
        <SEO title="Top" />

        <Hero />

        
        <Link to="/blog"><h1>Blog</h1></Link>

        <Bio />
      </Layout>
    </React.Fragment>
  )
}

export default TopPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
