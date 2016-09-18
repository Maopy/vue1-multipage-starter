import path from 'path'
import sendfile from 'koa-sendfile'

export default (opts) => {
  return async (ctx, next) => { // eslint-disable-line
    let { url } = ctx
    let { root, index } = opts
    if (url === '/') url += index || 'index.html'
    if (/html?$/.test(url)) {
      let stats = await sendfile(ctx, path.join(root, url))
      if (stats) return
    }
    return next()
  }
}
