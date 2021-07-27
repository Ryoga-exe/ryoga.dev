import React from 'react';

import Icon from '@components/atoms/icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  width: 100%;

  > h4 {
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 0.6em;
  }

  > div {
    font-size: 0.9em;
  }
`;

const StyledFlame = styled.div`
  display: flex;
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
