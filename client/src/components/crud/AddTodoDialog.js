import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddTodoBtn from "./AddTodoBtn"
import SendIcon from '@material-ui/icons/Send'
import CategorySelect from "./CategorySelect"
import DeadLinePicker from "./DeadLinePicker"

export default class AddTodoDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render = () =>
    <div>
      <AddTodoBtn openDialog={this.handleClickOpen}/>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new todo</DialogTitle>
        <DialogContent>

          {/*category*/}
          <CategorySelect/>

          {/*important*/}

          {/*description*/}
          <TextField autoFocus margin="dense" id="name" label="Task description" type="email" fullWidth/>

          {/*deadline*/}
          <DeadLinePicker/>

        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={this.handleClose} color="default">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={this.handleClose}>
            add<SendIcon style={{marginLeft: 10}}/>
          </Button>
        </DialogActions>
      </Dialog>
    </div>

}