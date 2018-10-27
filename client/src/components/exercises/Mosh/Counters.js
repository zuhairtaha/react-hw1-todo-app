import React from 'react'
import Paper from "@material-ui/core/Paper/Paper"
import Counter from "./Counter"
import Button from "@material-ui/core/Button/Button"

class Counters extends React.Component {
  state = {
    counters: [
      {id: 1, value: 1, disc: "welcome to 1"},
      {id: 2, value: 5, disc: "welcome to 2"},
      {id: 3, value: 6, disc: "welcome to 3"}
    ]
  }

  handleDelete = id => {

    this.setState(state => {
      return {
        counters: state.counters.filter(counter => counter.id !== id)
      }
    })

  }

  resetHandler = () => {
    this.setState((state, props) => {
      return {
        counters: state.counters.map(counter => ({...counter, value: 0}))
      }
    })
  }

  render = () =>
    <div>
      <Paper>

        <Button style={{margin: 10}} onClick={this.resetHandler}
                variant="contained" color="inherit">Rest counters</Button>

        {this.state.counters.map(c =>
          <Counter key={c.id} onDelete={this.handleDelete} counter={c}>
            {c.disc}
          </Counter>
        )}
      </Paper>
    </div>
}

export default Counters
