require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-ts-config`,
      options: {
        // specify gatsby-*.ts file's directory
        configDir: `.gatsby`,
      },
    },
  ],
};