const express = require("express")
const {ApolloServer} = require("apollo-server-express")
const mongoose = require("mongoose")
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

/*
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

 */
const port = process.env.PORT | 4000
mongoose
  .connect(
    `mongodb://zuhair:hyfpass123@ds013664.mlab.com:13664/todos-hyf`,
    {useNewUrlParser: true}
  )
  .then(() => {
    //const IN_PROD = NODE_ENV === 'production'

    const app = express()

    app.disable('X-powered-by')

    const server = new ApolloServer({
      typeDefs,
      // mocks:true,
      resolvers,
      playground: true
    })

    server.applyMiddleware({app}) // app is from an existing express app

    app.get('/', function (req, res) {
      res.send('hello world')
    })

    app.listen(port, () => console.log(`listening on ${port}`))
  })
  .catch(error => console.log(error))