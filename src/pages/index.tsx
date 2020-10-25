import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "src/components/molecules/bio"
import Layout from "src/components/layout"
import SEO from "src/utils/seo"
import Hero from "src/components/organisms/hero"
import Container from "src/components/atoms/container"
import styled from "styled-components"

const TopPage: React.FC<any> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Layout location={location} title={siteTitle}>
        <SEO title="Top" />
        <Hero />
        <AboutMe />
        <Skills />
        <Container >

          <Link to="/blog"><h1>Blog</h1></Link>
          <div style={{height: `100vh`}}></div>
          <Bio />
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage

const AboutMe: React.FC = () => (
  <Container id="aboutMe" padding="100px 3vw">
    <Heading>About Me</Heading>
    <section>
      <p>茨城県の某中等学校に通ってるただの人間です。</p>
      <p>ゲーム開発、Webサイト製作、電子工作などいろいろやっています。たまに編み物もやります。</p>
      <p>最近は、ReactやGatsby.js、競プロにハマって勉強していますが、やりたいことが多すぎて方向性が散乱しがちです。</p>
      <Link to="/about"><h1>About</h1></Link>
    </section>
  </Container>
)

const Skills: React.FC = () => (
  <Container id="skills" padding="100px 3vw">
    <Heading>Skills</Heading>
  </Container>
)

const Heading = styled.h2`
  display: inline-block;
  font-size: 2.2em;
  font-weight: normal;
  &::after{
    content: '';
    display: block;
    height: 3px;
    margin-bottom: 1.8rem;
    background-color: black;
    opacity: 0.3;
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
