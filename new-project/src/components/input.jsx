import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentInput: '',
      isLoaded: false
     }
  }

  componentDidMount = () => {
    this.setState({isLoaded: true})
  }

  updateUserInput = () => {
    if (this.state.isLoaded) {
    (document.getElementById('inputField').value.length > 2 ?
    this.setState({currentInput: document.getElementById('inputField').value.split(' ').join('')}) :
    this.setState({currentInput: ''}));
    this.setState({isLoaded: false})
    }
  }

  render() { 
    return ( 
      <div>
        <form class="form-inline">
          <input id="inputField" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="button" onSubmit={this.updateUserInput()}>Search</button>
        </form>
      </div>
    );
  }
}
 
export default Input;