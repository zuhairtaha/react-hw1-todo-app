import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import IconDelete from '@material-ui/icons/Delete'
import IconStar from '@material-ui/icons/Star'
import IconStarBorder from '@material-ui/icons/StarBorder'
import Query from "react-apollo/Query"
import {GetTasks} from "./queries"
import Loading from "./Layouts/Loading"

class Todos extends React.Component {
  state = {
    checked: [0],
    todos: []
  }

  handleToggle = value => () => {
    const {checked} = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked,
    })
  }
  setTodos = todos => this.setState({todos: todos})

  render = () =>
    <List>
      <Query query={GetTasks}>
        {({loading, error, data}) => {
          if (loading) return <Loading/>
          if (error) return <p>Error {error.message}</p>
          return data.tasks.map(({description, deadline, important, _id, done, createdAt}) =>
            <ListItem key={_id} role={undefined} dense button onClick={this.handleToggle(description)}>
              <Checkbox
                checked={this.state.checked.indexOf(description) !== -1}
                tabIndex={-1}
              />
              <ListItemText
                primary={description}
                secondary={createdAt}/>
              <ListItemSecondaryAction>

                <IconButton aria-label="Comments"><IconDelete/></IconButton>
                <IconButton aria-label="Comments">
                  {important ? <IconStar/> : <IconStarBorder/>}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        }}
      </Query>
    </List>

}

export default Todos