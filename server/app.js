import express from "express"
import {ApolloServer} from "apollo-server-express"
import mongoose from "mongoose"
import typeDefs from "./graphql/typeDefs"
import resolvers from "./graphql/resolvers"

const {
          APP_PORT    = 4000,
          NODE_ENV    = 'development',
          DB_USERNAME = 'admin',
          DB_PASSWORD = 123,
          DB_HOST     = 'localhost',
          DB_NAME     = 'todo'
      } = process.env

mongoose
    .connect(
        `mongodb://${DB_HOST}/${DB_NAME}`,
        {useNewUrlParser: true}
    )
    .then(() => {
        const IN_PROD = NODE_ENV === 'production'

        const app = express()

        app.disable('X-powered-by')

        const server = new ApolloServer({
            typeDefs,
            // mocks:true,
            resolvers,
            playground: !IN_PROD
        })

        server.applyMiddleware({app}) // app is from an existing express app

        app.listen({port: APP_PORT}, () =>
            console.log(`🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`)
        )
    })
    .catch(error => console.log(error))