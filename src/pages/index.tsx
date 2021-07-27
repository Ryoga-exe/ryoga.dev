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
    margin-right: 1rem;
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
      <CardFlame size={{ pc: '33.33333%', tb: '50%', sp: '100%' }}>
        <Card title='Programming' icon={faCode} size='3.0rem'>
          プログラミングがある程度できます。Web系はフロントエンドからバックエンドまで全て好きです。
          ゲームプログラミングもしており、OpenSiv3Dというライブラリに貢献した経験があります。
          また、競技プログラミングもしていて、AtCoderのコンテストにほぼ毎週参加しています。 レートは1000を突破し緑コーダーです！
        </Card>
        <Card title='Creating & Design' icon={faTools} size='3.0rem'>
          ものづくりやデザインが得意です。このサイトをデザインも込みで作れる程度の能力はあります。
          また、電子工作などもしており、自作ゲームのハードウェアの作成などをしています。
          自作PCをしたり、折り紙をしたり、編み物をしたりなど創作活動が大好きです。
        </Card>
        <Card title='Skiing' icon={faSkiing} size='3.0rem'>
          スキーを3歳の頃からしていて今もなお得意です。 全日本スキー連盟のスキーバッジテストの1級に小学生で合格した実績があります。
          また、競技スキーもやっています。全国中学校スキー大会に出場した経験があります。
        </Card>
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
      
      <br />
      <ButtonWrapper>
        <ButtonDetail to='/works'>Works</ButtonDetail>
      </ButtonWrapper>
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
