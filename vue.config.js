const path = require('path');
const projectRoot = path.resolve(__dirname);

module.exports = {
  devServer: {
    compress: true,
    port: 9090
  },
  assetsDir: 'static',
  chainWebpack: config => {
    config.resolve.symlinks(true);
    config.resolve.alias.set('@', `${projectRoot}/src`);
  }
};
