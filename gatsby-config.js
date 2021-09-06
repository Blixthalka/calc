module.exports = {
  siteMetadata: {
    title: `Calc`,
    description: `Calc`,
    author: `@gatsbyjs`,
    siteUrl: `localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,


    `gatsby-plugin-gatsby-cloud`,
  ],
}
