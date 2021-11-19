const IS_PROD = process.env.NODE_ENV === 'production' ? true : false

const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env) => {
  return {
    mode: IS_PROD ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: `${__dirname}/dist/`,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
          },
          use: 'ts-loader',
        },
        {
          test: /\.(scss|css)$/,
          use: [
            process.env.NODE_ENV !== 'production'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devtool: IS_PROD ? undefined : 'source-map',
    plugins: [
      new Dotenv({
        path: './env/.env',
      }),
      new HtmlWebpackPlugin({ template: './static/index.html' }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new CopyPlugin({
        patterns: [{ from: 'src/assets', to: 'assets' }],
      }),
    ],
  }
}
