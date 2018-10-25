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
    {id: 1, name: 'J.K. Rowling'},
    {id: 2, name: 'Michael Crichton'},
]

const resolvers = {
    Query: {
        authors(root, args, context, info) {
            return authors
            //return find(authors, {id: args.id})
        },
        author(root, args, context, info) {
            console.log(args.id)
            return authors.filter(a => a.id = args.id)
        }
    },
    Author: {
        books(author) {
            return filter(books, {author: author.name})
        },
    },
}

module.exports = resolvers