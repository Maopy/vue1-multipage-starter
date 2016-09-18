import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import config from '../config'
import * as utils from './utils'
import baseWebpackConfig from './webpack.config.base.babel'

Object.keys(baseWebpackConfig.entry).forEach((name) => {
  if (name === 'vendor') {
    return
  }
  baseWebpackConfig.entry[name] = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'].concat(baseWebpackConfig.entry[name])
})

let devConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})

const chunks = Object.keys(devConfig.entry)
chunks.forEach((pathname) => {
  if (pathname === 'vendor') {
    return
  }
  let conf = {
    filename: `${pathname}.html`,
    template: 'src/template.html',
    inject: true
  }
  if (pathname in devConfig.entry) {
    conf.chunks = ['vendor', pathname]
    conf.hash = false
  }
  devConfig.plugins.push(new HtmlWebpackPlugin(conf))
})

export default devConfig
