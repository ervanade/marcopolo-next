/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  
}
module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const dynamicRoutes = await fs.readdirSync('./pages/articles');
    const dynamicRoutesMap = dynamicRoutes.reduce((acc, route) => {
      if (route.endsWith('.js')) {
        const name = route.replace(/\.js$/, '');
        acc[`/article/${name}`] = { page: '/articles/[id]', query: { id: name } };
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
