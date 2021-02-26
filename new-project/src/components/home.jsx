import React, { Component } from 'react';
import Navbar from './navbar';
import RenderFilter from './renderFilter';

class Home extends Component {
  render() { 
    return ( 
      <div>
        <Navbar />
        <RenderFilter />
      </div>
     );
  }
}
 
export default Home;