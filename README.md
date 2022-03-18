# sparx-apollo-express-server

Goal of this service is to have GraphQL server based on Apollo server in conjunction with Express Node.js framework and Prisma ORM in between to accept GraphQL requests, resolve them and return responses from SQLite DB

## Local setup and development

For the `local` development it's required to perform a couple of actions so as to successfully build service, install required dependencies, instantiate database along with all tables and apply data dump.

This is a step by step instruction of HOWTO:

0. As a **one-time action** it's required to instantiate SQLite database with all tables and apply data dump. To do this, simply execute bash script via shell CLI from the root of this project `./infrastructure/make.sh`. <p style="color:red">**NOTE:**</p> no need to do it every time before running project locally, perform it only once

1. Run `npm run dev` command. This will isntall all dependecies, generate Prisma client, compile TS files and run nodemon process with hot reload.

2. Follow `http://localhost:4000/graphql` to enter Apollo sandbox environment and be able to test Query/Mutation requests