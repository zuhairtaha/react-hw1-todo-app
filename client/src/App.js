import React, {Component} from 'react'
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"
import {Header} from "./components/Layouts"
import CenterContainer from "./components/Layouts/CenterContainer"
import Todos from "./components/Todos"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header/>
        <CenterContainer>
          <Todos/>
        </CenterContainer>
      </ApolloProvider>
    )
  }
}

export default App
