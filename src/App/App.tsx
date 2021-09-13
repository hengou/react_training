import React from 'react';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      Demat breizh
      <hr/>
         {/* all attributes are props elements */}
        <Button text="Ok" bgcolor="skyblue"></Button>
    </div>
  );
}

export default App;
