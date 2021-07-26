const siteTitle = `Ryoga.exe's Website`;
const siteUrl = `https://ryoga.dev`;
const siteDescription = `Ryoga.exeのサイト`;
const backgroundColor = `#09090f`;
const themeColor = `#15171a`;
const siteFavicon = `content/assets/icon.png`;
const siteDefaultOgpImage = `/images/default.png`;

const siteMetadata = {
  title: siteTitle,
  titleTemplate: `%s | ${siteTitle}`,
  siteTitleAlt: `Ryoga.exe's Website`,
  siteHeadline: `Ryoga.exe's Website`,
  siteUrl: siteUrl,
  description: siteDescription,
  siteLanguage: `ja`,
  siteDefaultOgpImage,
  author: {
    name: `Ryoga.exe`,
    summary: `Student / Programmer / Skier`,
  },
  basePath: `/`,
  social: {
    twitter: `Ryoga_exe`,
    github: `Ryoga-exe`,
    qiita: `Ryoga-exe`,
    atcoder: `Ryoga_exe`,
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-twitter",
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-qiita`,
      options: {
        accessToken: process.env.QIITA_API_TOKEN,
        userName: siteMetadata.social.qiita,
        fetchPrivate: false,
        // excludedPostIds:
      }
    },
    /*
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        codegenConfig: { maybeValue: 'T | undefined' },
        fileName: `types/graphql-types.d.ts`
      },
    },
    */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              quality: 90,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-katex`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@utils': 'src/utils',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: siteFavicon,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}