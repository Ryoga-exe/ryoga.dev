import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "@components/molecules/bio"
import Layout from "@components/layout"
import SEO from "@utils/seo"
import styled from "@emotion/styled";
import { BlogPostsIndexQuery } from "types/graphql-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar} from '@fortawesome/free-solid-svg-icons'

const Base = styled.footer`
`

type Props = {
  data: BlogPostsIndexQuery;
  location: any;
};

const BlogIndex: React.FC<Props>  = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title="Blog" />
        {posts.map(({ node }) => {
          const title = node.frontmatter?.title || node.fields?.slug;
          return (
            <article
              key={node.fields?.slug}
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h3>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={node.fields?.slug}
                    itemProp="url"
                  >
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h3>
                <small><FontAwesomeIcon icon={faCalendar}/>{node.frontmatter?.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter?.description || node.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          )
        })}

        <Bio />
      </Layout>
    </React.Fragment>

  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogPostsIndex{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        limit: 1000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { status: { eq: "published" } } }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
          }
        }
      }
    }
  }
`
