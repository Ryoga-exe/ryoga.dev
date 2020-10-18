import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "src/components/molecules/bio"
import Layout from "src/components/layout"
import SEO from "src/utils/seo"
import Hero from "src/components/organisms/hero"
import Container from "src/components/atoms/container"

const TopPage: React.FC<any> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Layout location={location} title={siteTitle}>
        <SEO title="Top" />
        <Hero />
        <Container id="main">

          <Link to="/blog"><h1>Blog</h1></Link>
          <Link to="/About"><h1>About</h1></Link>
          <div style={{height: `100vh`}}></div>
          <Bio />
        </Container>
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
