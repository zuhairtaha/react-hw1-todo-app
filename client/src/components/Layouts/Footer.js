import React from 'react'
import Typography from "@material-ui/core/Typography"
import "./style.Footer.scss"

class Footer extends React.Component {
  render = () =>
    <footer className="footer">
      <Typography variant="h6" align="center" color="inherit" gutterBottom>
        HackYourFuture - React (1)
      </Typography>
      <Typography variant="subtitle1" align="center" color="inherit" component="p">
       <u>Front-end:</u> React, Material UI, Apollo GraphQl <br/>
        <u>Back-end:</u> Node.js, ExpressJs, MongoDB, Apollo GraphQl
      </Typography>
    </footer>

}

export default Footer