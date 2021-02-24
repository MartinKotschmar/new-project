import React, { Component } from 'react';

class ApiCallNames extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=300')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.results
        })
        console.log('didmount');
        this.setState({
          names: result.results.map(element => {
            return element.name
          }),
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() { 
    return null
  }
}
 
export default ApiCallNames;