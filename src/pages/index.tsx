import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "src/components/molecules/bio"
import Layout from "src/components/layout"
import SEO from "src/utils/seo"
import Hero from "src/components/organisms/hero"


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
