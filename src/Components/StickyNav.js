import React, { Component } from 'react';


class StickyNav extends Component {
  render(){
    return(
      <div id="sticked-nav" className="component invisible">
    <button className="cn-button" id="cn-button">+</button>
    <div className="cn-wrapper" id="cn-wrapper">
      <ul>
        <li><a href="#home" title="Home"><span className="fa fa-home"></span></a></li>
        <li><a href="#about" title="About"><span className="fa fa-info"></span></a></li>
        <li><a href="#portfolio" title="Portfolio"><span className="fa fa-image"></span></a></li>
        <li><a href="#blog" title="Blog"><span className="fa fa-pencil"></span></a></li>
        <li><a href="#contact" title="Contact"><span className="fa fa-envelope"></span></a></li>
      </ul>
    </div>
    <div id="cn-overlay" className="cn-overlay"></div>
  </div>
    );
  }
}
export default StickyNav;
