const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./src'));

    return config;
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'images-na.ssl-images-amazon.com',
      'images.ctfassets.net',
      'og-image.morimorig3.com',
    ],
  },
};
