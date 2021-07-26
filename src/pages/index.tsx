import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "@components/molecules/bio"
import Layout from "@components/layout"
import SEO from "@utils/seo"
import Hero from "@components/organisms/hero"
import Container from "@components/atoms/container"
import ButtonDetail from "@components/molecules/button"
import Heading from "@components/atoms/heading"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'

import Icon from "@components/atoms/icon"


const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title="Top" />
        <Hero />
        <AboutMe />
        <Skills />
        <Works />
        <Blog />
        <Achievements />
        <Container>

          <Link to="/blog"><h1>Blog</h1></Link>
          <div style={{height: `100vh`}}></div>
          <Bio />
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage

const Socials = styled.div`
  font-size: 1.7rem;
  margin-bottom: 10px;
  > span {
    margin-right: 1.0rem;
  }
`

const AboutMe: React.FC = () => (
  <section id="aboutMe">
    <Container padding="100px 4vw">
        <Heading.H3>About Me</Heading.H3>
        <Socials>
          <Icon icon={faTwitter} hover="gray" cursor="pointer" />
          <Icon icon={faGithub} hover="gray" cursor="pointer" />
        </Socials>
        <p>茨城県の某中等学校に通ってるただの人間です。</p>
        <p>ゲーム開発、Webサイト製作、電子工作などいろいろやっています。たまに編み物もやります。</p>
        <p>最近は、ReactやGatsby.js、競プロにハマって勉強していますが、やりたいことが多すぎて方向性が散乱しがちです。</p>
        <p>詳しくはAboutページへ</p>
        <br />
        <ButtonDetail txt="About" to="/about" />
    </Container>
  </section>
)

const Skills: React.FC = () => (
  <section id="skills" css={css`background-color: #f7fafc;`}>
    <Container padding="100px 4vw">
      <Heading.H3>Skills</Heading.H3>
      <div css={css`font-size: 3.0rem;`}>
        <Icon icon={faHtml5}/>
        <Icon icon={faJs}/>
        <Icon icon={faCss3}/>
      </div>
      <br />
      <ButtonDetail txt="Skills" to="/about#skills" />
    </Container>
  </section>
)

const Works: React.FC = () => (
  <section id="works">
    <Container padding="100px 4vw">
      <Heading.H3>Works</Heading.H3>
    </Container>
  </section>
)

const Blog: React.FC = () => (
  <section id="blog">
    <Container padding="100px 4vw">
      <Heading.H3>Blog</Heading.H3>
    </Container>
  </section>
)

const Achievements: React.FC = () => (
  <section id="achievements">
    <Container padding="100px 4vw">
      <Heading.H3>Achievements</Heading.H3>
    </Container>
  </section>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
