import Koa from 'koa'
import { bodyParser } from '@koa/bodyparser'
import { initDB } from './db.js'
import { ListingRouter } from './routes.js'

const app = new Koa()
app.use(bodyParser())
app.use(ListingRouter.routes())
app.use(ListingRouter.allowedMethods())

if (!process.env.HOST || !process.env.PORT) {
  throw new Error('Missing env variables HOST or PORT.')
}

initDB()

app.listen(Number(process.env.PORT), process.env.HOST, () =>
  console.info(`API running on http://${process.env.HOST + ':' + process.env.PORT}/`)
)
