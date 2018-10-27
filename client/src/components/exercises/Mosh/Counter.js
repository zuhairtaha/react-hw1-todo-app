import React from 'react'
import Paper from "@material-ui/core/Paper/Paper"
import Button from "@material-ui/core/Button/Button"
import IconButton from "@material-ui/core/IconButton/IconButton"
import DeleteIcon from '@material-ui/icons/Delete'

class Counter extends React.Component {
  state = {
    value: this.props.counter.value,
    tags: [
      {name: "tag1", id: 1},
      {name: "tag2", id: 2},
      {name: "tag3", id: 3}
    ]
  }

  handleIncrement = (n) => {
    this.setState(state => {
      return {
        value: state.value + n
      }
    })
  }
  render = () => {
    const {children, onDelete} = this.props
    const {id} = this.props.counter
    return <Paper style={{padding: 8}}>
      <h4>{children}</h4>
      <span>Count: {this.state.value}</span>
      <br/>
      <Button onClick={() => this.handleIncrement(1)} variant="contained" color="primary">+1</Button>&nbsp;
      <Button onClick={() => this.handleIncrement(2)} variant="contained" color="secondary">+2</Button>
      {/*delete*/}
      <IconButton onClick={() => onDelete(id)}
                  aria-label="Delete"><DeleteIcon/></IconButton>

      <ul>
        {
          this.state.tags.length
            ? this.state.tags.map(tag => <li key={tag.name}>{tag.name}</li>)
            : 'no items'
        }
      </ul>
    </Paper>
  }


}

export default Counter