import React, { Component } from 'react';
import Navbar from './navbar';
import RenderFilter from './renderFilter';

class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Navbar />
        <RenderFilter />
      </div>
     );
  }
}
 
export default Render;