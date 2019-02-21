module.exports = {
  siteMetadata: {
    title: '23Twenty Media | Photography & Videography in Philadelphia, Pennsylvania',
    description: 'High Quality Photography & Videography servicing Philadelphia, New Jersey, Delaware, NYC & Nationwide. Wedding & Portrait Photography.',
    siteUrl: 'https://www.23twenty.com',
  },
  pathPrefix: '/',
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
        name: '23Twenty Media',
        short_name: '23Twenty Media',
        description: 'Photography | Videography in Philadelphia, Pennsylvania and beyond',
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
        trackingId: 'UA-134867932-1',
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
