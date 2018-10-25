const {find, filter} = require('lodash')

const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
]

const authors = [
    {name: 'J.K. Rowling'},
    {name: 'Michael Crichton'},
]

const resolvers = {
    Query: {
        author(root, args, context, info) {
            return find(authors, {id: args.id})
        },
    },
    Author: {
        books(author) {
            return filter(books, {author: author.name})
        },
    },
}

module.exports = resolvers