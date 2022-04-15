import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

interface QueryType {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          fields: {
            slug: string;
            date: string;
            title: string;
            description: string;
            excerpt: string;
          };
        };
      }
    ];
  };
}

const query = `
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { status: { eq: "published" } } }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
            date
            title
            description
            excerpt
          }
        }
      }
    }
  }
`;

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const result = await graphql<QueryType>(query);

  if (result.errors) throw result.errors;
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type !== `MarkdownRemark` &&
      node.internal.type !== `FeedQiitaPosts` &&
      node.internal.type !== `FeedSlidePosts`) {
    return;
  }

  const [slug, title, date, description, excerpt] =
    node.internal.type === `MarkdownRemark`
      ? [`/blog` + createFilePath({ node, getNode }), node.frontmatter?.title, node.frontmatter?.date, node.frontmatter?.description, node.excerpt]
      : [node.link, node.title, node.pubDate, node.contentSnippet, node.contentSnippet];

  createNodeField({ name: `slug`, node, value: slug });
  createNodeField({ name: `title`, node, value: title });
  createNodeField({ name: `date`, node, value: date });
  createNodeField({ name: `description`, node, value: description });
  createNodeField({ name: `excerpt`, node, value: excerpt });
};
