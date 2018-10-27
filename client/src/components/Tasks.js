import React, {Component} from 'react'
import {Query} from "react-apollo"
import {GetTasks} from "./queries"
import Button from "@material-ui/core/Button"

class Tasks extends Component {
  render() {
    return (
      <Query
        query={GetTasks}
      >
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return data.tasks.map(({description, deadline}) => (
            <div key={description}>
              <p>{`${description}: ${deadline}`}</p>
              <Button variant="contained" color="primary">
                Hello World
              </Button>
            </div>
          ))
        }}
      </Query>
    )
  }
}

export default Tasks





