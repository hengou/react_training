import React from 'react';

import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {
  counter = 0
  render() {
    return (
      <div className="App">
        Valeur du counter : {this.counter}
        <hr />
        <Button onClickEvent={() => {
          console.log(this);
          this.counter--;
          console.log(this.counter);
        }}>soustraction</Button>
        <Button onClickEvent={() => {
          console.log(this);
          this.counter++;
          console.log(this.counter);
        }} bgColor="chartreuse">addition</Button>
      </div>
    );
  }
}

export default App;