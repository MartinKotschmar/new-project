import React, { Component } from 'react';
import Input from './input.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentInput: '', }
  }

  callback = (currentInput) => {
    this.setState({currentInput: currentInput})
  }

  render() { 
    return (
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand">Navbar</a>
          <Input  />
        </nav>
      </div> 
     );
  }
}
 
export default Navbar;