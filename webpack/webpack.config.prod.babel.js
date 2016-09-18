import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import * as utils from './utils'
import config from '../config'
import baseWebpackConfig from './webpack.config.base.babel'

const env = process.env.NODE_ENV === 'testing'
  ? 'testing'
  : config.prod.env

let prodConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.prod.productionSourceMap, extract: true })
  },
  devtool: config.prod.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.prod.assetsRoot,
    filename: utils.assetsPath('js/[name]-[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[id]-[chunkhash:8].js')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.prod.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        // remove `console.*`
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin(utils.assetsPath('css/[name]-[contenthash:8].css')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: utils.assetsPath('js/vendor-[chunkhash:8].js'),
      minChunks: (module, count) => {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})

const chunks = Object.keys(prodConfig.entry)
chunks.forEach((pathname) => {
  if (pathname === 'vendor') {
    return
  }
  let conf = {
    filename: path.resolve(__dirname, `../dist/views/${pathname}.html`),
    template: 'src/template.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  }
  prodConfig.plugins.push(new HtmlWebpackPlugin(conf))
})

if (config.prod.productionGzip) {
  prodConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.prod.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

export default prodConfig
