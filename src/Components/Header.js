import React, {Component} from 'react';
import SocialIcons from './SocialIcons'

class Header extends Component {
  render(){
    return(
      <header>
       <div className="container">
         <div className="col-xs-12 col-md-8">
           <div id="slogan" className="wow fadeIn" data-wow-delay="800ms">
             <blockquote>
               Creativity is a drug I cannot live without
             </blockquote>
           </div>
         </div>
         <div className="col-xs-12 col-md-4 bordered-bottom">
           <SocialIcons/>
         </div>
       </div>
     </header>
    );
  }
}
export default Header;
