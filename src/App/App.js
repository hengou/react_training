import React, { Component } from 'react'
import './App.css'
import Chat from './pages/Chat/Chat'
// import {ADR_REST, RESSOURCES} from './config/config'
// * not a best practice if not everything of this ressource will be used
import * as REST_CONFIG from './config/config'


class App extends Component {
  constructor(props) {
    super(props);
    // for Class, state are initialized in constructor
    // BP: always specify the good type for the state memeber, for example [] in these case
    this.state = { users: [], messages: [] };
  }

  // react component life cycle, 3 categories => Mount, Update and UnMount 
  componentDidMount() {
    setInterval(() => {
      fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.users, { method: 'GET' })
        .then(flux => flux.json())
        .then(arr => {
          this.setState({ users: arr });
          return arr;
        })
    }, 10000)
  }


  render() {
    return (
      // react component wrapper
      // to respect well formality to return only one element in XML
      // and not to add a useless div wrapper
      <>
        <div>{JSON.stringify(this.state.users)}</div>
        <div className="App">
          <Chat users={this.state.users} messages={this.state.messages}></Chat>
        </div>
      </>
    )
  }
}

export default App;