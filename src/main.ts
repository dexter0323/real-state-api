import Koa from 'koa'
import { ListingRouter } from './routes.js'

const app = new Koa()
app.use(ListingRouter.routes())
app.use(ListingRouter.allowedMethods())

if (!process.env.HOST || !process.env.PORT) {
  throw new Error('Missing environment variables.')
}

app.listen(Number(process.env.PORT), process.env.HOST, () =>
  console.info(`API running on http://${process.env.HOST + ':' + process.env.PORT}/`)
)
