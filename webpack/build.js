import shell from 'shelljs'
shell.env.NODE_ENV = 'production'

import webpack from 'webpack'
import path from 'path'
import ora from 'ora'

import config from '../config'
import webpackConfig from './webpack.config.prod.babel'

const spinner = ora('building for production...')
spinner.start()

const assetsPath = path.join(config.prod.assetsRoot, config.prod.assetsSubDirectory)
const viewsPath = path.join(config.prod.assetsRoot, config.prod.viewsSubDirectory)

shell.rm('-rf', config.prod.assetsRoot)
shell.mkdir('-p', assetsPath)
shell.mkdir('-p', viewsPath)
// shell.cp('-R', 'static/', assetsPath)

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: true,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
