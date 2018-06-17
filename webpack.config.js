const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }, {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ],
        exclude: /node_modules/
      }, {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader', {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"],
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.PROD),
        'API_URL': JSON.stringify(process.env.API_URL)
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.tpl.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
