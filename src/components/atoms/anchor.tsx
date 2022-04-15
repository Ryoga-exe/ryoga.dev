import { Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
          <FaExternalLinkAlt
            css={css`
              font-size: 0.75em;
              margin-right: 0.4em;
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
