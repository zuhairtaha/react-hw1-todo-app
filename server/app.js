const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//region Database
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true})
    .then(() => console.log('Connected to mongodb'))
    .catch(console.log)
//endregion

const apiRouter = require('./routes/apiRouter')

const app = express()

//region ApolloServer
const {ApolloServer, gql} = require('apollo-server-express')
const schema = require('./models/graphql/schema')
const resolvers = require('./models/graphql/resolvers')

const server = new ApolloServer({schema, resolvers})
server.applyMiddleware({app}) // app is from an existing express app
//endregion

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', apiRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
