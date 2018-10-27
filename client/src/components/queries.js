import gql from "graphql-tag"

export const GetTasks = gql`
  {
    tasks {
      _id
      categoryid
      description
      deadline
      done
      important
      createdAt
      updatedAt
    }
  }
`

export const CategoriesTitles = gql`
  {
    categories {
      _id
      title
    }
  }
`

