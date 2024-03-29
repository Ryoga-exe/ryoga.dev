import { PageProps } from 'gatsby';
import React from 'react';

import Container from '@components/atoms/container';
import Layout from '@components/layout';
import Bio from '@components/molecules/bio';
import Hero from '@components/organisms/hero';
import { css } from '@emotion/react';
import SEO from '@utils/seo';
import { AboutMe, Skills, Works, RecentPosts, Achievements } from 'src/components/organisms/top';

const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title='Top' />
        <Hero />
        <div
          css={css`
            > section:nth-child(even) {
              background-color: #f7fafc;
            }
          `}
        >
          <AboutMe />
          <Skills />
          <Works />
          <RecentPosts />
          <Achievements />
        </div>
        <Container margin='15px auto'>
          <Bio />
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default TopPage;
