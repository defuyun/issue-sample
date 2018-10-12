const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  return {
    mode : env.mode,

    entry : {
      app : ['./src/index.js'],
    },

    module : {
      rules : [
        {
          test : /\.css$/,
          exclude : /node_modules/,
          use : [
            MiniCssExtractPlugin.loader,
             "css-loader",
          ],
        },
        {
          test : /\.js$/,
          exclude : /node_modules/,
          use : 'babel-loader',
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: 'file-loader',
        }
      ]
    },

    plugins : [
      new HtmlWebpackPlugin({}),
      new MiniCssExtractPlugin({}),
    ]
  }
}
