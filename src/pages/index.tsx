import { Link, PageProps } from 'gatsby';
import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import Icon from '@components/atoms/icon';
import Layout from '@components/layout';
import Bio from '@components/molecules/bio';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';
import Hero from '@components/organisms/hero';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faSkiing } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import SEO from '@utils/seo';

import { Card, CardFlame } from 'src/components/molecules/card';

const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title='Top' />
        <Hero />
        <AboutMe />
        <Skills />
        <Works />
        <Blog />
        <Achievements />
        <Container>
          <Link to='/blog'>
            <h1>Blog</h1>
          </Link>
          <Bio />
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default TopPage;

const Socials = styled.div`
  font-size: 1.7rem;
  margin-bottom: 0.7rem;
  > span {
    margin-right: 1.0rem;
  }
`;

const AboutMe: React.FC = () => (
  <section id='aboutMe'>
    <Container padding='100px 4vw'>
      <Heading.H3>About Me</Heading.H3>
      <Socials>
        <Icon icon={faTwitter} hover='gray' cursor='pointer' />
        <Icon icon={faGithub} hover='gray' cursor='pointer' />
      </Socials>
      <p>茨城県の某中等学校に通ってるただの人間です。</p>
      <p>ゲーム開発、Webサイト製作、電子工作などいろいろやっています。たまに編み物もやります。</p>
      <p>最近は、ReactやGatsby.js、競プロにハマって勉強していますが、やりたいことが多すぎて方向性が散乱しがちです。</p>
      <p>詳しくはAboutページへ</p>
      <br />
      <ButtonWrapper>
        <ButtonDetail to='/about'>About</ButtonDetail>
      </ButtonWrapper>
    </Container>
  </section>
);

const Skills: React.FC = () => (
  <section
    id='skills'
    css={css`
      background-color: #f7fafc;
    `}>
    <Container padding='100px 4vw'>
      <Heading.H3>Skills</Heading.H3>
      <CardFlame>
        <Card title='Coding' icon={faCode} size='3.0rem'></Card>
        <Card title='Creating' icon={faTools} size='3.0rem'></Card>
        <Card title='Skiing' icon={faSkiing} size='3.0rem'></Card>
        <Card title='Game' icon={faGamepad} size='3.0rem'></Card>
      </CardFlame>
      <br />
      <ButtonWrapper>
        <ButtonDetail to='/about#skills'>Skills</ButtonDetail>
        <ButtonDetail to='https://www.resume.id/ryoga_exe'>See my resume</ButtonDetail>
      </ButtonWrapper>
    </Container>
  </section>
);

// #edf2f7
const Works: React.FC = () => (
  <section id='works'>
    <Container padding='100px 4vw'>
      <Heading.H3>Works</Heading.H3>
    </Container>
  </section>
);

// #e2e8f0
const Blog: React.FC = () => (
  <section id='blog'>
    <Container padding='100px 4vw'>
      <Heading.H3>Blog</Heading.H3>
    </Container>
  </section>
);

// #cbd5e0
const Achievements: React.FC = () => (
  <section id='achievements'>
    <Container padding='100px 4vw'>
      <Heading.H3>Achievements</Heading.H3>
    </Container>
  </section>
);