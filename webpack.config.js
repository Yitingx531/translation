const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "./static"),
        },
        proxy: [
          {
            context: ['/api'],
            target: "http://localhost:5050",
            pathRewrite: { "^/api": "" },
          },
        ],
        hot: true,
        compress: true,
        port: 8080,
      },
    plugins: [
        new HtmlWebpackPlugin({
         title: 'Development',
        }),
      ],
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "ts-loader",
            },
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...', '.css'],
      },
}