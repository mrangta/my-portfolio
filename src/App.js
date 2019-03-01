import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import StickyNav from './Components/StickyNav';


class App extends Component {
  render() {
    return (
      <div>
        <StickyNav/>
        <Wrapper/>
      </div>
    );
  }
}

export default App;
