import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Query from "react-apollo/Query"
import {CategoriesTitles} from "../queries"

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
})

class CategorySelect extends React.Component {
  state = {
    category: '',
    open: false,
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  render() {
    const {classes} = this.props
    return <Query query={CategoriesTitles}>
      {({loading, error, data}) => {
        if (loading) return 'loading...'
        if (error) return <span>Error {error.message}</span>

        return <form autoComplete="off">
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Select Category</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.category}
              onChange={this.handleChange}
              inputProps={{
                name: 'category',
                id: 'demo-controlled-open-select',
              }}>
              <MenuItem value="">
              </MenuItem>
              {data.categories.map(({_id, title}) => (
                <MenuItem key={_id} value={_id}>{title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      }}
    </Query>
  }
}

CategorySelect.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CategorySelect)