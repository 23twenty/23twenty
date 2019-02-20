module.exports = {
  siteMetadata: {
    title: '23twentymedia',
    description: 'Photography | Videography in Philadelphia, Pennsylvania',
    siteUrl: 'https://23twenty.com',
  },
  pathPrefix: '/23twenty',
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '23twentymedia',
        short_name: '23twentymedia',
        description: 'Photography | Videography in Philadelphia, Pennsylvania',
        homepage_url: 'https://www.23twenty.com',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        // icons: [
        //   {
        //     src: '/img/android-chrome-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png',
        //   },
        //   {
        //     src: '/img/android-chrome-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png',
        //   },
        // ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
