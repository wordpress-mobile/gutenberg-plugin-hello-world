const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  devtool: 'source-map',
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
            test: /\.js$/,
            use: require.resolve( 'source-map-loader' ),
            enforce: 'pre',
        }
    ]
  },
  output: {
      ...defaultConfig.output,
      devtoolModuleFilenameTemplate: '[resourcePath]',
  }
};