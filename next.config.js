module.exports = {
  distDir: "build",
  pageExtensions: ["page.jsx", "page.js"],
  target: "serverless",
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
   webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};
