const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const sass = require('@zeit/next-sass');

module.exports = withPlugins([
    [sass, {
        cssModules: true
    }],
    [optimizedImages],
],
{
    assetPrefix: process.env.BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },
}

// {
//     assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : ''
// }
)

