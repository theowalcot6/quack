/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.orcadesign.co.uk`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // Other options...
        icon: `src/favicon.ico`, // Update this path
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        head: [
          // Google Analytics
          [
            'script',
            {
              async: true,
              src: 'https://www.googletagmanager.com/gtag/js?id=G-M94HPKQFQT',
            },
          ],
          [
            'script',
            {},
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M94HPKQFQT');
            `,
          ],
        ],
      },
    },
    // Other plugins...
  ],
};

