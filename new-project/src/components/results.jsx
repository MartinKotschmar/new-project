import React, { Component } from 'react';
import Fuse from 'fuse.js';
import ApiCallNames from './apiCallNames.jsx';
import NamesList from './namesList';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filteredElements: [],
     }
  }

  getUrl = () => {
    this.props.dataFromParent().map(element => {

      fetch('https://pokeapi.co/api/v2/pokemon/' + ((element.refIndex) + 1))
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              urlDefault: result.sprites.front_default,
              urlShiny: result.sprites.front_shiny,
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      })
  }

  componentDidUpdate = () => {
    
  }

  filterElements = () => {

    const fuzzyLogic = new Fuse(this.state.names, {
      key: '',
      minMatchCharLength: 2,
      shouldSort: true,
      threshold: 0.5,
      ignoreLocation: true,
      distance: 5
    })
    this.setState({filteredElements: fuzzyLogic.search(this.props.currentInput)})
  }

  render() { 
    return ( 
      <div>
        <ApiCallNames />
        <NamesList />
            {/* <li
              key={element.refIndex}>{element.item}
              <img class="m-2" src={this.state.urlDefault.map(element => element)} height="50px" width="50px" alt={'picture-of-' + element.item + '--default'}/>
              {/* <img class="m-2" src={this.state.urlShiny.map(element => element)} height="50px" width="50px" alt={'picture-of-' + element.item + '--shiny-female'}/></div> */}
            {/* </li> */}
      </div>
     );
  }
}
 
export default Results;