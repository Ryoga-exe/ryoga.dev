import React from 'react';

import Icon from '@components/atoms/icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BreakPoint } from 'src/utils/breakPoint';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 1.0rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;

  > h4 {
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 0.6em;
  }

  > div {
    font-size: 1em;
    white-space: normal;
    text-align: left;
  }

  @media (${BreakPoint.CSS.tb}) {
    width: 33.33333333%;
  }

  @media (${BreakPoint.CSS.sp}) {
    width: 50%;
  }
`;

const StyledFlame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

const CardFlame: React.FC<any> = ({ children }) => (
  <React.Fragment>
    <StyledFlame>{children}</StyledFlame>
  </React.Fragment>
);

export { Card, CardFlame };
