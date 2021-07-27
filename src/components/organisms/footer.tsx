import React from 'react';

import Container from '@components/atoms/container';
import styled from '@emotion/styled';
import Color from '@utils/color';

const BaseFooter = styled.footer`
  width: 100%;
  margin-top: auto;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: ${Color.bgAccent};
`;

const FotterSmall = styled.small`
  display: inline;
  font-size: 0.85em;
  color: rgba(255, 255, 255, 0.7);
  > a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  @media (max-width: 751px) {
    display: block;
  }
`;

const Footer: React.FC = () => {
  const setyaer: number = 2020,
    year = new Date().getFullYear();
  return (
    <BaseFooter>
      <Container>
        <FotterSmall>© {setyaer + (year == setyaer ? '' : '-' + year)} Ryoga.exe All rights reserved.</FotterSmall>
        <FotterSmall>
          Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </FotterSmall>
      </Container>
    </BaseFooter>
  );
};

export default Footer;
