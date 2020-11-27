require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-tagmanager-delayed",
      options: {
        id: "GTM-TDSKB9Q",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        defaultDataLayer: { platform: "gatsby" }
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Avenir`,
          `300,400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Avenir`,
    //         variants: [`400`, `500`, `700`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["Avenir"],
    //       urls: ["/fonts/fonts.css"],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-wpgraphql-inline-images',
      options: {
        wordPressUrl: 'https://gqltst.wpengine.com/',
        uploadsUrl: 'https://gqltst.wpengine.com/wp-content/uploads/',
        processPostTypes: ['Page', 'Post'],
        graphqlTypeName: `WPGraphQL`,
        generateWebp: true
      },
    },
    {
      resolve: 'gatsby-source-gravityforms',
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: 'https://gqltst.wpengine.com',
        // Gravity Forms API
        api: {
          key: process.env.CONSUMER_KEY,
          secret: process.env.CONSUMER_SECRET,
        },
        basicAuth: {
          user: `hs-admin`,
          password: process.env.PASSWORD
        }
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpcontent`,
        url: `https://gqltst.wpengine.com/graphql`,
        refetchInterval: 60
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
