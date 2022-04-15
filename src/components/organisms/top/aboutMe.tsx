import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import Icon from '@components/atoms/icon';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';
import styled from '@emotion/styled';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AtCoder from 'src/components/atoms/atcoder';

const Content: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AboutMe {
      site {
        siteMetadata {
          social {
            twitter
            github
            atcoder
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
      transition: 0.2s;
      &:hover {
        fill: gray;
        transition: 0.2s;
      }
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
          <a
            href={`https://atcoder.jp/users/${social.atcoder}`}
            aria-label='AtCoder'
            target='_blank'
            rel='noopener noreferrer'
            data-tip={`${social.atcoder}`}
            data-for='tooltip-github'
          >
            <span><AtCoder aria-hidden="true" focusable="false" className='svg-inline--fa'/></span>
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
