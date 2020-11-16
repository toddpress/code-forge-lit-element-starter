const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const getEnvConfig = (env) =>
  require(`./webpack-utils/webpack.${env.mode}.js`)(env);

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: 'vendor',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
    to: 'vendor/bundles',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true,
  },
];

const assets = [
  // {
  //   from: 'src/img',
  //   to: 'img/',
  // },
];

module.exports = (env) => {
  const {mode, presets} = env;
  const envConfig = getEnvConfig(env);
  return webpackMerge(
    {
      mode,
      output: {
        filename: '[name].[chunkhash:8].js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                [
                  '@babel/plugin-proposal-decorators',
                  { decoratorsBeforeExport: false },
                ],
                '@babel/plugin-proposal-class-properties',
              ],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    targets: '>1%, not dead, not ie 11',
                  },
                ],
              ],
            },
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          minify: {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          },
        }),
        new CopyWebpackPlugin([...polyfills, ...assets], {
          ignore: ['.DS_Store'],
        }),
      ],
    },
    { ...envConfig }
  );
};
