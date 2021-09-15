import React, { Component } from 'react'
import './App.css'
import Chat from './pages/Chat/Chat'
import store from './store/store'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Chat></Chat>
      </div>
    )
  }
}

export default App;