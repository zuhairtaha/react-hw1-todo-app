import React from 'react'

class Todo extends React.Component {
  render = () =>
    <div
      onClick={this.props.toggleComplete}
      style={{textDecoration: this.props.todo.complete ? "line-through" : ""}}
    >
      this.props.text
    </div>
}

export default Todo