import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';

const Content: React.FC = () => (
  <section id='achievements'>
    <Container padding='100px 4vw'>
      <Heading.H3>Achievements</Heading.H3>
      <ButtonWrapper>
        <ButtonDetail to='/about#Achievements'>Achievements</ButtonDetail>
      </ButtonWrapper>
    </Container>
  </section>
);

export default Content;
