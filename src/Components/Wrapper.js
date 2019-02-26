import React, {Component} from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Singlepost from './Singlepost';
import Contact from './Contact';
import Footer from './Footer';

class Wrapper extends Component {
  render(){
    return(
      <div className="wrapper">
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Blog/>
      <Singlepost/>
      <Contact/>
      <Footer/>
      </div>
    );
  }
}
export default Wrapper;
