export const { PORT } = process.env

export const DATABASE = {
  PATH: process.env.DATABASE_PATH || '',
  URL: process.env.DATABASE_URL,
} as const
