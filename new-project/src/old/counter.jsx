import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    }
  }

  render() { 
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  };
}
 
export default Counter;