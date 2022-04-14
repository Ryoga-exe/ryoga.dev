import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Anchor from 'src/components/atoms/anchor';

interface Query {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          excerpt: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            date: string;
            title: string;
            description: string;
          };
        };
      }
    ];
  };
}

const Styled = {
  RecentPost: styled.div`
    color: #a2a2a2;
    font-size: 0.96rem;
    a {
      text-decoration: none;
      color: #4173b3;
    }
    li {
      padding: 0.5rem 0;
      border-top: 2px solid #efefef;
      > span {
        margin-right: 0.9rem;
        font-size: 0.85rem;
      }
    }
    li:last-child {
      border-bottom: 2px solid #efefef;
      margin-bottom: 10px;
    }
  `,
};

const Content: React.FC = () => {
  // 直近 10 件
  const data = useStaticQuery<Query>(graphql`
    query {
      allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { status: { eq: "published" } } }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
            }
          }
        }
      }
    }
  `);

  const recentPosts = data.allMarkdownRemark.edges;

  return (
    <section
      id='blog'
      css={css`
        background-color: #f7fafc;
      `}
    >
      <Container padding='100px 4vw'>
        <Heading.H3>Recent Posts</Heading.H3>
        <Styled.RecentPost>
          <ul className='alt'>
            {recentPosts.map(({ node }) => {
              const title = node.frontmatter?.title || node.fields?.slug;
              const date = node.frontmatter.date;
              return (
                <li>
                  <span>{date}</span>
                  <Anchor to={node.fields?.slug}>{title}</Anchor>
                </li>
              );
            })}
          </ul>
        </Styled.RecentPost>
        <ButtonWrapper>
          <ButtonDetail to='/blog'>Blog</ButtonDetail>
        </ButtonWrapper>
      </Container>
    </section>
  );
};

export default Content;
