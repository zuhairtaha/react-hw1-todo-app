import {gql} from "apollo-server-express"

const typeDefs = gql`
    type Category {
        _id: String
        title: String!
        description: String
        createdAt: String
        updatedAt: String
        tasks: [Task!]!
    }

    type Task {
        _id: String
        categoryid: String
        description: String!
        deadline: String!
        done: Boolean
        important: Boolean
        createdAt: String
        updatedAt: String
    }

    type Query {
        categories: [Category]
        category(id: String!): Category
        tasks: [Task!]!
        task(id:String!): Task
    }

    type Mutation {
        addCategory(title: String!, description: String): Category
        addTask(categoryid: String, description: String!, deadline: String!, done: Boolean, important: Boolean): Task
    }
`

export default typeDefs