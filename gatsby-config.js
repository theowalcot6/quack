/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.quackmarketing.co.uk`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // Other options...
        icon: `src/favicon.ico`, // Update this path
      },
    },
    // Other plugins...
  ],
}
