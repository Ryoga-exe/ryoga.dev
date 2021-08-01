import { Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AnchorProps = {
  to: string;
  target?: string;
  children?: React.ReactNode;
};

const Anchor: React.FC<AnchorProps> = ({ to, target, children }) => {
  const isExternal = to.startsWith('http://') || to.startsWith('https://');
  return (
    <React.Fragment>
      {isExternal ? (
        <a href={to} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            css={css`
              font-size: 0.8em;
              margin-right: 0.4em;
              margin-bottom: 0.05em;
            `}
          />
          {children}
        </a>
      ) : (
        <Link to={to} target={target}>
          {children}
        </Link>
      )}
    </React.Fragment>
  );
};

export default Anchor;
