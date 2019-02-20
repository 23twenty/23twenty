const path = require('path')

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
    module: {
      rules: [
        {
          test: require.resolve('jquery'),
          use: [{
            loader: 'expose-loader',
            options: 'jQuery'
          }, {
            loader: 'expose-loader',
            options: '$'
          }]
        },
        {
          test: require.resolve('background-video'),
          use: [{
            loader: 'expose-loader',
            options: 'BackgroundVideo'
          }]
        },
      ]
    },
    plugins: [
      plugins.provide({
        $: "jquery",
        jQuery: "jquery",
        BackgroundVideo: 'background-video'
      })
    ]
  })
}
