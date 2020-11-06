module.exports = {
  siteMetadata: {
    title: `Gatsby Multiplay Lesson`,
    description: `Small lesson of multiplay.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `pl`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
}
