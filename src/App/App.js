import React, { Component } from 'react'
import './App.css'
import Chat from './pages/Chat/Chat'
import UserAuth from './pages/UserAuth/UserAuth'
import store from './store/store'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAuth/>
        {/* <Chat></Chat> */}
      </div>
    )
  }
}

export default App;