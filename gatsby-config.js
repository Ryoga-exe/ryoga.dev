require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-qiita`,
      options: {
        accessToken: process.env.QIITA_API_KEY,
        userName: process.env.QIITA_USER_NAME,
        fetchPrivate: false,
        // excludedPostIds:
      }
    },
    {
      resolve: `gatsby-plugin-ts-config`,
      options: {
        // specify gatsby-*.ts file's directory
        configDir: `.gatsby`,
      },
    },
  ],
};