import React, { Component } from 'react'
import './App.css'
import Chat from './pages/Chat/Chat'
import UserAuth from './pages/UserAuth/UserAuth'
import store from './store/store'
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* Match exact / */}
            <Route path="/" exact>
              Hello and welcome
              <Link to="UserAuth">Login</Link>
            </Route>
            <Route path="/UserAuth">
              <UserAuth />
            </Route>
            {/* <Route path="/Chat/:id"> */}
            <Route path="/Chat/:id">
              <Chat />
            </Route>
            {/* other url forbidden */}
            <Route path="/">
              Error 404
            </Route>
          </Switch>
          {/* <UserAuth/> */}
          {/* <Chat></Chat> */}
        </div>
      </Router>
    )
  }
}

export default App;