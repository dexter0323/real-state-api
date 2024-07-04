import Router from '@koa/router';
export const ListingRouter = new Router({ prefix: '/api/v1/listing' });
const listing = [
    {
        id: 'string',
        title: 'string',
        price: 'string',
        description: 'string',
    },
];
ListingRouter.post('listing', '/', (ctx) => (ctx.body = listing));
ListingRouter.get('listing', '/', (ctx) => (ctx.body = listing));
ListingRouter.delete('listing', '/', (ctx) => (ctx.body = listing));
