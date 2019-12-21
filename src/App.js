import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import "./App.css";

//import function router
import Register from './register'

//Router Component
class App extends Component {
  render() {
    return (
      <div className="App container">
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={login} />
      </div>
    )
  }
}

function Home(){
  return(
    <div></div>
  )
}

function login(){
  return(
    <h1>Login Page</h1>
  )
}



export default App;
