import React from 'react';

import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {
  // counter = 0
  constructor(props){
    super(props);
    this.state={counter:0};
  }
  
  render() {
    return (
      <div className="App">
        Valeur du counter : {this.state.counter}
        <hr />
        <Button onClickEvent={() => {
          console.log(this);
          // cannot change state value directly by state.counter++
          // since it's not mutable, 
          // setState will create another immutable object and refresh UI
          // that's why we can see the change of "Valeur du counter"
          this.setState({counter:this.state.counter - 1});
          console.log(this.state.counter);
        }}>soustraction</Button>
        
        <Button onClickEvent={() => {
          console.log(this);
          // asynchro
          this.setState({counter:this.state.counter + 1});
          console.log(this.state.counter);
        }} bgColor="chartreuse">addition</Button>
      </div>
    );
  }
}

export default App;