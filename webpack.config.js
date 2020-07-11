const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.css$/,
        use: [CssPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new CssPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  }
};
