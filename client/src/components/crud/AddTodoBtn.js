import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
})

function AddTodoBtn(props) {
  const {classes} = props
  return (
    <Button variant="fab" color="secondary" onClick={props.openDialog} aria-label="Add" className={classes.fab}>
      <AddIcon/>
    </Button>
  )
}

AddTodoBtn.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddTodoBtn)