import React, { Component } from 'react';
import './App.css';
import cycle from './cycle.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: '',
      max: '',
      current: '',
      moves: '',
      result: null,
    };

    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.handleCurrentChange = this.handleCurrentChange.bind(this);
    this.handleMovesChange = this.handleMovesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMinChange(event) {
    this.setState({
      min: event.target.value,
    });
  }
  handleMaxChange(event) {
    this.setState({
      max: event.target.value,
    });
  }
  handleCurrentChange(event) {
    this.setState({
      current: event.target.value,
    });
  }
  handleMovesChange(event) {
    this.setState({
      moves: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('The min number : ' + this.state.min + '\n The max number is: ' + this.state.max + '\n The current number is: ' + this.state.current +'\n The number of moves we should make is: ' + this.state.moves);
    const {current, moves, min, max} = this.state;
    const result = cycle(parseInt(current, 10), parseInt(moves, 10), parseInt(min, 10), parseInt(max, 10));
    this.setState({
      result,
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Final Destination</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              What is the lowest position?
              <input type="number" name="start" value={this.state.min} onChange={this.handleMinChange} />
            </label>
          </p>
          <p>
            <label>
              What is the highest position? 
              <input type="number" name="end" value={this.state.max} onChange={this.handleMaxChange} />
            </label>
          </p>
          <p>
            <label>
              What is your current position? 
              <input type="number" name="current" value={this.state.current} onChange={this.handleCurrentChange} />
            </label>
          </p>
          <p>
            <label>
              How many steps would you like to move? 
              <input type="number" name="moves" value={this.state.moves} onChange={this.handleMovesChange} />
            </label>
          </p>
          <input type="submit" value="Submit" />
        </form> 
      
        {
          this.state.result !== null &&
            <h2>
              Your final position is {this.state.result}.
            </h2>
        }

      </div>
    );
  }
}

export default App;
