import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Preloader from './Components/Preloader';
import StickyNav from './Components/StickyNav';


class App extends Component {
  render() {
    return (
      <div>
        <Preloader/>
        <StickyNav/>
        <Wrapper/>
      </div>
    );
  }
}

export default App;
