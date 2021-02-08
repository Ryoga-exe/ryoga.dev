import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "src/components/molecules/bio"
import Layout from "src/components/layout"
import SEO from "src/utils/seo"
import Hero from "src/components/organisms/hero"
import Container from "src/components/atoms/container"
import ButtonDetail from "src/components/atoms/button"

import styled from "styled-components"

const TopPage: React.FC<any> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title="Top" />
        <Hero />
        <AboutMe />
        <Skills />
        <Container >

          <Link to="/blog"><h1>Blog</h1></Link>
          <div style={{height: `100vh`}}></div>
          <Bio />
        </Container>
        <p>{`${process.env.TEST}`}</p>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage

const AboutMe: React.FC = () => (
  <Container id="aboutMe" padding="100px 4vw">
    <Heading>About Me</Heading>
    <section>
      <p>茨城県の某中等学校に通ってるただの人間です。</p>
      <p>ゲーム開発、Webサイト製作、電子工作などいろいろやっています。たまに編み物もやります。</p>
      <p>最近は、ReactやGatsby.js、競プロにハマって勉強していますが、やりたいことが多すぎて方向性が散乱しがちです。</p>
      <p>詳しくはAboutページへ</p>
      <ButtonDetail txt="About" to="/about">About</ButtonDetail>
    </section>
  </Container>
)

const Skills: React.FC = () => (
  <Container id="skills" padding="100px 4vw">
    <Heading>Skills</Heading>
  </Container>
)

const Heading = styled.h2`
  font-size: 1.9em;
  font-weight: 500;
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
