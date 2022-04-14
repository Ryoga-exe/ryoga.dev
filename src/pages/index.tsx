import { PageProps } from 'gatsby';
import React from 'react';

import Container from '@components/atoms/container';
import Layout from '@components/layout';
import Bio from '@components/molecules/bio';
import Hero from '@components/organisms/hero';
import { AboutMe, Skills, Works, Blog, Achievements } from 'src/components/organisms/top'

import SEO from '@utils/seo';

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
          <Bio />
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default TopPage;
