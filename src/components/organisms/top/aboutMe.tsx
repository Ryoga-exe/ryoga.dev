import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import Icon from '@components/atoms/icon';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';
import styled from '@emotion/styled';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Content: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AboutMe {
      site {
        siteMetadata {
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  const { social } = data.site.siteMetadata;

  const Socials = styled.div`
    font-size: 1.7rem;
    margin-bottom: 0.7rem;
    > a {
      color: black;
      text-decoration: none;
      margin-right: 1rem;
    }
  `;

  return (
    <section id='aboutMe'>
      <Container padding='100px 4vw'>
        <Heading.H3>About Me</Heading.H3>
        <Socials>
          <a
            href={`https://twitter.com/${social.twitter}`}
            aria-label='Twitter'
            target='_blank'
            rel='noopener noreferrer'
            data-tip={`@${social.twitter}`}
            data-for='tooltip-twitter'
          >
            <Icon icon={faTwitter} hover='gray' cursor='pointer' />
          </a>
          <a
            href={`https://github.com/${social.github}`}
            aria-label='GitHub'
            target='_blank'
            rel='noopener noreferrer'
            data-tip={`${social.github}`}
            data-for='tooltip-github'
          >
            <Icon icon={faGithub} hover='gray' cursor='pointer' />
          </a>
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
};

export default Content;
