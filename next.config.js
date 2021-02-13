// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'
const withImages = require('next-images')
module.exports = withImages({
  target: 'serverless',
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
