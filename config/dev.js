/**
 * Created by IlyaLitvinov on 07.04.17.
 */
const webpack = require('webpack');

const dev = (config, _path) => {
  config.output.path = _path;
  config.devServer = {
    contentBase: _path,
    compress: true,
    port: 8080,
    host: '0.0.0.0',
    disableHostCheck: true
  };
  config.devtool = 'inline-source-map';
  return config;
};
module.exports = dev;