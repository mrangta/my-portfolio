import React, {Component} from 'react';

class Footer extends Component {
  render(){
    return(
      <footer>
        <div className="container">
          <div id="copyright-bar" className="text-small text-center">
            Copyright 2019 &copy; Monika Rangta | All rights reserved <br/>
            <span className="label label-default"><i className="fa fa-paint-brush"></i> designer: Monika Rangta</span>  | <span className="label label-default"><i className="fa fa-coffee"></i> developer: Monika Rangta</span>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
