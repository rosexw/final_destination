import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Final Destination</h1>
        </header>
        <form>
          <p><label>
            What number would you like to start from?
            <input type="number" name="start" />
          </label></p>
          <p><label>
            What number would you like to end at? 
            <input type="number" name="end" />
          </label></p>
          <p><label>
            What is your current number? 
            <input type="number" name="current" />
          </label></p>
          <p><label>
            How many steps would you like to move? 
            <input type="number" name="moves" />
          </label></p>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default App;
