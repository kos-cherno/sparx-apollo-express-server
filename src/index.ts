/* eslint-disable no-console */
import 'dotenv/config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { resolvers } from './graphql/resolvers'
import { dbConnectionMW } from './middlewares'
import { typeDefs } from './graphql/typeDefinitions'
import { prisma } from './lib'
import { PORT, DATABASE } from './common/config'

// added only as a temporary solution for demo purposes so as to enable Apollo sandbox in production
const playgroundProps = { introspection: true, playground: true }
const server = new ApolloServer({ typeDefs, resolvers, context: { prisma }, ...playgroundProps })
const app = express()

server
  .start()
  .then((_res) => {
    server.applyMiddleware({ app })

    app.use(dbConnectionMW(DATABASE.PATH))

    app.listen({ port: PORT }, () => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
  .catch((err) => {
    throw new Error(err)
  })
