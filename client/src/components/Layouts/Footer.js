import React from 'react'
import Paper from "@material-ui/core/Paper/Paper"
import "./style.Footer.scss"

class Footer extends React.Component {
  render = () =>
    <Paper className="footer" square>
      <footer>
        <p>First MERN stack application (todo list web application)</p>

        <p>Front-end: React, Material UI, Apollo GraphQl <br/>
          Back-end: Node.js, ExpressJs, MongoDB, Apollo GraphQl <br/>
          ⚠️ Just reading from mongoDB is working currently. another CRUD operations are under construction
        </p>
      </footer>
    </Paper>

}

export default Footer