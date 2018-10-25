import {gql} from "apollo-server-express"

const typeDefs = gql`
    type Book {
        title: String!
        author: Author!
    }

    type Author {
        id: Int
        name: String
        books: [Book]
    }

    type Query {
        authors: [Author]
        author(id:Int!): Author
    }
`

export default typeDefs