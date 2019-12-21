import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

/* Import Views */
import Home from "./views/home";
import Register from "./views/register";
import Login from "./views/login";
import Error from "./views/error";

/* Router */
class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="*" component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
