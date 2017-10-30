module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'new',
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'Pragma', content: 'catch' },
      { name: 'viewport', content: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios', 'js-cookie'],
    babel: {
      plugins: [['component', [
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-default'
        },
        {
          libraryName: 'mint-ui',
          style: true
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]],
      comments: true
    }
  },
  css: [
    'normalize.css'
  ],
  cache: false,
  plugins: [
    { src: '~/plugins/element-ui', ssr: false },
    { src: '~/plugins/mint-ui', ssr: false },
    { src: '~/plugins/pxToRem', ssr: false }
  ],
  router: {
    scrollBehavior: function _scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
