const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/ts/app.ts',
    products: './src/ts/products/index.ts',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: true,
    chunks: ['index'],
    filename: 'index.html',
  }),
  new HtmlWebpackPlugin({
    template: './src/products.html',
    inject: true,
    chunks: ['products'],
    filename: 'products.html',
  }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].hash.[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};