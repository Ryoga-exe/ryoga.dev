let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
require("dotenv").config({
  path: `.env.${activeEnv}`,
});

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