import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '@components/layout';
import Bio from '@components/molecules/bio';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/blog-post.scss';
import SEO from '@utils/seo';

const BlogPostTemplate: React.FC<any> = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <article className='blog-article'>
        <div className='blog-title'>
          <h1 itemProp='headline'>{post.frontmatter.title}</h1>
          <p className='post-date'>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {post.frontmatter.date}
          </p>
        </div>
        <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp='articleBody' />
        {/*<section>{renderAst(post.htmlAst)}</section>*/}
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Bio />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`;
