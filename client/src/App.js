import React, {Component, Fragment} from 'react'
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"
import {Header} from "./components/Layouts"
import CenterContainer from "./components/Layouts/CenterContainer"
import Todos from "./components/Todos"
import AddTodoDialog from "./components/crud/AddTodoDialog"
import Footer from "./components/Layouts/Footer"

const client = new ApolloClient({
  uri: "https://todos-hyf.herokuapp.com/graphql"
})

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <CenterContainer>
          <ApolloProvider client={client}>
            <Todos/>
            <AddTodoDialog/>
          </ApolloProvider>
        </CenterContainer>
        <Footer/>
      </Fragment>
    )
  }
}

export default App
