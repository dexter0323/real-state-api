import sqlite3 from 'sqlite3'
// import { v4 as uuidv4 } from 'uuid'

export let DB: sqlite3.Database

export const initDB = (): void => {
  if (!process.env.SQLITE_FILE_PATH) {
    throw new Error('Missing env variables SQLITE_FILE_PATH.')
  }

  if (!DB) {
    DB = new sqlite3.Database(String(process.env.SQLITE_FILE_PATH), err => {
      if (err) return console.error(err.message)
      console.log(`Connected to Sqlite DB.`)
    })
  }
  createTables()
}

export const closeDB = (): void => {
  if (!process.env.SQLITE_FILE_PATH) {
    throw new Error('Missing env variables SQLITE_FILE_PATH.')
  }

  if (DB) {
    DB.close(err => {
      if (err) return console.error(err.message)
      console.log(`Conection closed to "${process.env.SQLITE_FILE_PATH}" Sqlite DB.`)
    })
  }
}

const createTables = () => {
  const userTable = `
    CREATE TABLE IF NOT EXISTS listings (
		id          TEXT PRIMARY KEY,
		title       TEXT NOT NULL,
        price       REAL NOT NULL,
		description TEXT NOT NULL
	)`

  DB.run(userTable, err => {
    if (err) return console.error('Error creating listings table:', err.message)
  })
}
