import React, {Component} from 'react';

class PreLoader extends Component {
  render(){
    return(
      <div id="preloader">
      <div id="loader">&nbsp;</div>
      <noscript>JavaScript is off. Please enable to view full site.</noscript>
    </div>
    );
  }
}
export default PreLoader;
