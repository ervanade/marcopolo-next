/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['api.adventureranddiscoverer.com', 'adventureranddiscoverer.com'],
  },
  compress: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
        extractComments: false,
      }),];
    }
    return config;
  },


}
module.exports = {
  mode: 'production',
  productionBrowserSourceMaps: false,
}
module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const dynamicRoutes = await fs.readdirSync('./pages/article');
    const dynamicRoutesMap = dynamicRoutes.reduce((acc, route) => {
      if (route.endsWith('.js')) {
        const name = route.replace(/\.js$/, '');
        acc[`/article/${name}`] = { page: '/article/[id]', query: { id: name } };
      }
      return acc;
    }, {});

    return {
      '/': { page: '/' },
      '/article': { page: '/article' },
      '/testimoni': { page: '/testimoni' },
      ...dynamicRoutesMap,
    };
  },

};

module.exports = nextConfig
