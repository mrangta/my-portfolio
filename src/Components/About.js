import React, {Component} from 'react';
import Resume from './Resume';
import SkillStatistics from './SkillStatistics';
import Testimonials from './Testimonials';

class About extends Component {
  render(){
    return(
      <section id="about" className="page">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h1 className="capital">about me</h1>
              <span className="capital">discover who I am</span>
            </div>
            <a href="#home"  className="close-btn">
              <i className="fa fa-close"></i>
            </a>
          </div>
          <div className="content">
            <h1 className="uppercase text-center">what can i do</h1>
            <AboutContent/>
            <Resume/>
            <SkillStatistics/>
            <Testimonials/>
          </div>
        </div>        
      </section>
    );
  }
}
export default About;
 class AboutContent extends Component {
   render(){
     return(
       <div className="columned-content row m-50-v">
         <div className="col-xs-12 col-md-3">
           <div className="box text-center">
             <div className="icon-title">
               <i className="fa fa-pencil"></i>
               <h3 className="uppercase">designing</h3>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod, a pharetra justo fringilla. Cras ultricies eget quam quis rutrum. </p>
           </div>
         </div>
         <div className="col-xs-12 col-md-3">
           <div className="box text-center">
             <div className="icon-title">
               <i className="fa fa-code"></i>
               <h3 className="uppercase">development</h3>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod, a pharetra justo fringilla. Cras ultricies eget quam quis rutrum. </p>
           </div>
         </div>
         <div className="col-xs-12 col-md-3">
           <div className="box text-center">
             <div className="icon-title">
               <i className="fa  fa-bullhorn"></i>
               <h3 className="uppercase">marketing</h3>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod, a pharetra justo fringilla. Cras ultricies eget quam quis rutrum. </p>
           </div>
         </div>
         <div className="col-xs-12 col-md-3">
           <div className="box text-center">
             <div className="icon-title">
               <i className="fa  fa-support"></i>
               <h3 className="uppercase">great support</h3>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod, a pharetra justo fringilla. Cras ultricies eget quam quis rutrum. </p>
           </div>
         </div>
       </div>
     );
   }
 }
