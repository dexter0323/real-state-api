import Router from '@koa/router'
import { Listing } from './types.js'

export const ListingRouter = new Router({ prefix: '/api/v1/listings' })

const listing: Listing[] = [
    {
        id: 'string',
        title: 'string',
        price: 'string',
        description: 'string',
    },
]

ListingRouter.post('listings', '/', ctx => (ctx.body = listing))

ListingRouter.get('listings', '/', ctx => (ctx.body = listing))

ListingRouter.delete('listings', '/', ctx => (ctx.body = listing))
