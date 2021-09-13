import React from 'react';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      Demat breizh
      <hr/>
         {/* all attributes are props elements */}
        <Button type="submit">
          <img src="/img/ok_icon.png" alt="ok"/>
        </Button>
        <Button type="reset">
          {/* they are props.children */}
          <img src="/img/cancel_icon.png" alt="cancel"/>
          Cancel
        </Button>
        <Button classColor="primary"></Button>
    </div>
  );
}

export default App;
