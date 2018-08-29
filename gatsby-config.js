module.exports = {
  siteMetadata: {
    title: `Stephen Liong's Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Ubuntu']
        }
      }
    }
  ],
}
