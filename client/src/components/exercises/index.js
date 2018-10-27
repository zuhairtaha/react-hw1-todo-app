import React from 'react'
import Grid from '@material-ui/core/Grid'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Counters from "./Mosh/Counters"

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  Container: {
    padding: 10
  }
}

export default props =>
  <Grid container style={styles.Container} spacing={8}>
    <Grid item sm={12}>
      <Counters/>
    </Grid>
    <Grid item sm={6}>
      <LeftPane styles={styles}/>
    </Grid>
    <Grid item sm={6}>
      <RightPane styles={styles}/>
    </Grid>
  </Grid>