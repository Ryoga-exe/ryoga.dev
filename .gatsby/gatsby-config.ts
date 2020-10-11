const siteTitle = `Ryoga.exe's Website`;
const siteUrl = `https://ryoga.dev`;
const siteDescription = `Ryoga.exeのサイト`;
const backgroundColor = `#09090f`;
const themeColor = `#7ee6a6`;

const siteMetadata = {
  title: siteTitle,
  siteTitleAlt: `Ryoga.exe's Website`,
  siteHeadline: `Ryoga.exe's Website`,
  siteUrl: siteUrl,
  description: siteDescription,
  siteLanguage: `ja`,
  author: {
    name: `Ryoga.exe`,
    summary: `Student / Programmer / Skier`,
  },
  basePath: `/`,
  social: {
    twitter: `Ryoga_exe`,
    github: `Ryoga-exe`,
    qiita: `Ryoga-exe`,
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-root-import`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
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
              showLineNumbers: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
        // trackingId: `UA-179580992-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryoga.exe's Website`,
        short_name: `Ryoga.exe`,
        start_url: `/`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    
    `gatsby-plugin-sitemap`,
  ],
}