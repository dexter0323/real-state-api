import Router from '@koa/router'
import { getListings, createListing, deleteListing } from './controller.js'

export const ListingRouter = new Router({ prefix: '/api/v1/listings' })

ListingRouter.post('listings', '/', createListing)

ListingRouter.get('listings', '/', getListings)

ListingRouter.delete('listings', '/:id', deleteListing)
