import React, {Component} from 'react';
import SocialIcons from './SocialIcons';
import ContactForm from './ContactForm';

class Contact extends Component {

  render(){
    return(
      <section id="contact" className="page">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h1 className="capital">contact with me</h1>
              <span className="capital">I'm available 24x7 (almost)</span>
            </div>
            <a href="#home"  className="close-btn">
              <i className="fa fa-close"></i>
            </a>
          </div>
          <div className="content">
            <ContactContent/>
            <Map/>
            <ContactForm />
            <div id="big-socials" className="text-center m-20-v">
              <SocialIcons/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

class ContactContent extends Component {
  render(){
    return(
      <div className="columned-content row m-50-v">
        <div className="col-xs-12 col-md-4">
          <div className="box text-center">
            <div className="icon-title">
              <i className="fa fa-location-arrow"></i>
              <h3 className="uppercase inline">address</h3>
            </div>
            <p>Helsinki, Finland</p>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="box text-center">
            <div className="icon-title">
              <i className="fa fa-phone"></i>
              <h3 className="uppercase inline">phone</h3>
            </div>
            <p>
              +358 451686586
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="box text-center ">
            <div className="icon-title">
              <i className="fa  fa-envelope"></i>
              <h3 className="uppercase inline">email</h3>
            </div>
            <p className="">
              <a href="mailto:monikarangta@icloud.com">monikarangta@icloud.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
class Map extends Component {
  render(){
    return(
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe title="mapframe" width="1180" height="420" id="gmap_canvas" src="https://maps.google.com/maps?q=Helsinki&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </div>
        </div>
    );
  }
}
