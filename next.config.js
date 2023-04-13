/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['api.adventureranddiscoverer.com', 'adventureranddiscoverer.com'],
},
  compress: true,
  optimizeCss: true,

  
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
