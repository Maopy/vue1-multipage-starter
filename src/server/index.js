import app from './app'
import config from '../../config'

const env = process.env.NODE_ENV || 'production'
const port = env === 'development'
  ? config.dev.port
  : config.prod.port

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://localhost:${port}\n`)
})
