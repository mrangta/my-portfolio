import React, {Component} from 'react';

class Footer extends Component {
  render(){
    return(
      <footer>
        <div className="container">
          <div id="copyright-bar" className="text-small text-center">
            <span className="label label-default">2019 &copy; Monika Rangta | Hosted on:<a rel="noopener noreferrer" target="_blank" href="https://monikarangta.herokuapp.com/"> Heroku</a> | Repository on <a rel="noopener noreferrer" target="_blank" href="https://github.com/mrangta">GitHub</a></span>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
