import React from 'react'

class TodoForm extends React.Component {
  state = {
    text: ""
  }

  render = () =>
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        onChange={this.changeHandler}
        placeholder="todo..."
      />
      <button>+</button>
    </form>

  changeHandler = e =>
    this.setState({
      text: e.target.value
    })

  handleSubmit = e => {
    e.preventDefault()
    const todo = {
      text: this.state.text,
      complete: false,
      id: Date.now()
    }
    this.props.onAddTodoSubmit(todo)
  }
}

export default TodoForm