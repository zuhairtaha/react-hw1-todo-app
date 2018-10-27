import gql from "graphql-tag"

export const GetTasks = gql`
    query GetTasks {
        tasks {
            description
            deadline
        }
    }`

