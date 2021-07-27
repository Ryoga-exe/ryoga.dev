import React from 'react';

import Icon from '@components/atoms/icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BreakPoint } from 'src/utils/breakPoint';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;

  > h4 {
    font-weight: 600;
    font-size: 1.2em;
    margin-bottom: 0.6em;
  }

  > div {
    font-size: 0.85em;
    white-space: normal;
    text-align: left;
  }
`;

interface CardSize {
  pc: string;
  tb: string;
  sp: string;
}

const StyledFlame = styled.div<{
  size?: CardSize;
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    width: ${(props) => props.size?.pc || '25%'};

    @media (${BreakPoint.CSS.tb}) {
      width: ${(props) => props.size?.tb || '33.333333%'};
    }

    @media (${BreakPoint.CSS.sp}) {
      width: ${(props) => props.size?.sp || '50%'};
    }
  }
`;

const Card: React.FC<any> = ({ icon, size, title, children }) => (
  <React.Fragment>
    <StyledCard>
      <p
        css={css`
          font-size: ${size};
          margin-bottom: 0.4rem;
        `}>
        <Icon icon={icon} />
      </p>
      <h4>{title}</h4>
      <div>{children}</div>
    </StyledCard>
  </React.Fragment>
);

type CardFlameProps = {
  children?: React.ReactNode;
  size?: CardSize;
};

const CardFlame: React.FC<CardFlameProps> = ({ children, size }) => (
  <React.Fragment>
    <StyledFlame size={size}>{children}</StyledFlame>
  </React.Fragment>
);

export { Card, CardFlame };
