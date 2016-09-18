import path from 'path'
import Koa from 'koa'
import KoaStatic from 'koa-static'
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'

import entryHandler from './middlewares/entry_handler'
import webpackConfig from '../../webpack/webpack.config.dev.babel'

const app = new Koa()
const env = process.env.NODE_ENV || 'production'

let staticPath = path.resolve(__dirname, '../../', 'dist')

app.proxy = true
app.keys = ['some secret hurr', 'keyboard cat']

if (env === 'development') {
  app.use(entryHandler({
    root: staticPath
  }))

  const compiler = webpack(webpackConfig)

  app.use(devMiddleware(compiler, {
    hot: true,
    // lazy: true,
    noInfo: true,
    inline: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      cached: true,
      chunks: false
    }
  }))

  app.use(hotMiddleware(compiler, {
    // log: console.log,
    // path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
  }))
} else {
  app.use(KoaStatic(staticPath, {
    maxage: 0
  }))
}

app.on('error', (err) => console.log(err))

export default app
