import React from 'react'
import Grid from "@material-ui/core/Grid/Grid"
import Paper from "@material-ui/core/Paper/Paper"
import "./style.CenterContainer.scss"

class CenterContainer extends React.Component {
  render = () =>
    <div className="center-container">
      <Grid container>
        <Grid item sm={12}>
          <Paper className="center">
            {this.props.children}
          </Paper>
        </Grid>
      </Grid>

    </div>
}

export default CenterContainer