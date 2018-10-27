import React, {Fragment} from 'react'
import TodoForm from "./TodoForm"
import Todo from "./Todo"

class TodoList extends React.Component {
  state = {
    todos: [
      {id: 1, text: "Hello", complete: true},
      {id: 2, text: "Messin 2", complete: false},
      {id: 3, text: "Feed the cat", complete: true},
      {id: 4, text: "Solve the exercise page 23", complete: false},
    ]
  }

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleComplete = id =>
    this.setState(state => ({
      todos: state.todos
        .map(todo =>
          todo.id === id ? {...todo, complete: !todo.complete} : todo
        )
    }))


  render = () =>
    <Fragment>
      <TodoForm onAddTodoSubmit={this.addTodo}/>
      {this.state.todos.map(todo =>
        <Todo
          key={todo.id}
          text={todo.text}
          complete={todo.complete}
          toggleComplete={() => this.toggleComplete(todo.id)}
          todo={todo}
        />
      )}
      <div>todos left: {this.state.todos.reduce((count, todo) => todo.complete ? count + 1 : count, 0)}</div>
    </Fragment>
}

export default TodoList