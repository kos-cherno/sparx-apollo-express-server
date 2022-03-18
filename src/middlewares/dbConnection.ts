/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express'
import sqlite3 from 'sqlite3'

const dbConnection = (dbPath = ''): sqlite3.Database => {
  const newDb = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(`[dbConnection]: connection to DB hasn't been established due to: ${err.message}`)
    }

    console.log('[dbConnection]: successfully connected')
  })

  newDb.close((err) => {
    if (err) {
      console.error(`[dbConnection]: error occured during DB being closed: ${err.message}`)
    }
  })

  return newDb
}

export const dbConnectionMW = (dbPath: string) => {
  return (_req: Request, _res: Response, next: NextFunction): void => {
    dbConnection(dbPath)
    next()
  }
}
