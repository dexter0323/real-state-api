import { Context } from 'koa'
import { Listing } from './types.js'
import { DB } from './db.js'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'
import { v4 as uuidV4 } from 'uuid'

let listings: Listing[]

export const getListings = async (ctx: Context) => {
  if (!listings) await refreshListings()
  ctx.body = listings
}

export const createListing = async (ctx: Context) =>
  new Promise<void>((resolve, reject) => {
    const { title, price, description } = ctx.request.body

    // Check if all required fields have values
    if (!title || !price || !description) {
      ctx.status = StatusCodes.BAD_REQUEST
      ctx.body = 'Missing required fields'
      return resolve()
    }

    // Validate types of fields
    if (typeof title !== 'string' || typeof description !== 'string' || isNaN(Number(price))) {
      ctx.status = StatusCodes.BAD_REQUEST
      ctx.body = 'Invalid field types'
      return resolve()
    }

    DB.run(
      `INSERT into listings VALUES (?, ?, ?, ?)`,
      [uuidV4(), ctx.request.body.title, ctx.request.body.price, ctx.request.body.description],
      err => {
        if (err) return reject(err)
        ctx.status = StatusCodes.CREATED
        ctx.body = getReasonPhrase(StatusCodes.CREATED)
        refreshListings()
        resolve()
      }
    )
  })

export const deleteListing = async (ctx: Context) =>
  new Promise<void>((resolve, reject) => {
    DB.run(`DELETE from listings WHERE id = ?`, [ctx.params.id], err => {
      if (err) return reject(err)
      ctx.status = StatusCodes.OK
      ctx.body = getReasonPhrase(StatusCodes.OK)
      refreshListings()
      resolve()
    })
  })

export const refreshListings = (): Promise<void> =>
  new Promise((resolve, reject) => {
    DB.all<Listing>(`SELECT * from listings`, (err, rows) => {
      if (err) return reject(err)
      listings = rows
      return resolve()
    })
  })
