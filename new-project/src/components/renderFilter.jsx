import React, { Component } from 'react';
import Results from './results.jsx'

class RenderFilter extends Component {
  
  constructor(props) {
    super(props)
    this.Results = React.createRef();
    this.state = {
      currentInput: '',
      error: null,
      isLoaded: false,
      items: [],
      names: [],
      id: [],
      urlDefault: [],
      urlShiny: [],
      filteredElements: []
    }
  }

  componentDidUpdate = () => {
    document.getElementById('userInputHeadline').innerHTML = `${this.state.currentInput}`

    if (this.state.currentInput) {
    }
  }
  
  render() { 
    const {error, isLoaded, items, currentInput, names, id, urlDefault, urlShiny, filteredElements} = this.state;
    return ( 
        <div class="h-100 d-inline-block w-100 p-3">
          <div>
            <h2 id="userInputHeadline"></h2>
          </div>
          <Results refs={this.Results} />
        </div>
     );
  }
}
 
export default RenderFilter;