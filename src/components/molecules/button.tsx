import { Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from '@utils/color';

const Base = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 50px;
  line-height: 1;
  margin-top: 30px;
  font-size: 1em;
  border-radius: 2px;
  color: ${Color.buttonText};

  background-color: ${Color.buttonBg};
  transition: 0.3s;
  > span {
    color: ${Color.buttonText};
    display: inline-block;
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    transition: 0.3s;
  }
  > svg {
    color: ${Color.buttonText};
    display: inline-block;
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    background-color: ${Color.buttonBgHoverd};
    transition: 0.3s;
    > span {
      transform: translateX(-5px);
      transition: 0.3s;
    }
    > svg {
      transform: translateX(5px);
      opacity: 1;
      transition: 0.3s;
    }
  }
`;

const BaseLink = Base.withComponent(Link);

type ButtonDetailProps = {
  children?: React.ReactNode;
  to: string;
  target?: string;
};

const ButtonDetail: React.FC<ButtonDetailProps> = ({ children, to, target }) => {
  const isExternal = to.startsWith('http://') || to.startsWith('https://');
  return (
    <React.Fragment>
      {isExternal ? (
        <Base href={to} target='_blank'>
          <span>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              css={css`
                font-size: 0.8em;
                margin-right: 0.4em;
                margin-bottom: 0.1em;
              `}
            />
            {children}
          </span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Base>
      ) : (
        <BaseLink to={to} target={target}>
          <span>{children}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </BaseLink>
      )}
    </React.Fragment>
  );
};

const ButtonWrapper = styled.div`
  > a {
    margin-right: 2rem;
  }
`;

export { ButtonDetail, ButtonWrapper };
