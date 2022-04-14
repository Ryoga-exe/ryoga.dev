import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';
import { css } from '@emotion/react';

const Content: React.FC = () => (
  <section
    id='blog'
    css={css`
      background-color: #f7fafc;
    `}
  >
    <Container padding='100px 4vw'>
      <Heading.H3>Blog</Heading.H3>
      <ButtonWrapper>
        <ButtonDetail to='/blog'>Blog</ButtonDetail>
      </ButtonWrapper>
    </Container>
  </section>
);

export default Content;
