import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"

const Bio: React.FC<any> = () => {
  const data = useStaticQuery(graphql`
    query Bio {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  
  return (
    <Base>
      <StaticImage
          src="https://raw.githubusercontent.com/Ryoga-exe/Ryoga-exe/main/icon/icon.jpg"
          alt={author}
          placeholder="blurred"
          layout="fixed"
          width={60}
          css={css`margin-bottom: 0;
          margin-right: 1.2rem;
          min-width: 60px;
          border-radius: 50%;`}
        />
      <div>
        <p>
          <a href={`https://twitter.com/${social.twitter}`}>{author.name}</a>
        </p>
        <p>{author.summary}</p>
      </div>
    </Base>
  );
};

// justify-content: center;
const Base = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0;
`;

export default Bio;
