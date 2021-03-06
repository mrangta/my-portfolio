import React, {Component} from 'react';

class Portfolio extends Component {
  render(){
    return(
      <section id="portfolio" className="page">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h1 className="capital">My portfolio</h1>
              <span className="capital">Here's what I've done so far.</span>
            </div>
            <a href="#home"  className="close-btn">
              <i className="fa fa-close"></i>
            </a>
          </div>
          <div className="content m-125-v">
            <div id="filters" className="group-selectors">
              <a className="active" href="#all"   data-filter="*">all</a>
              <a  href="#graphic" data-filter=".graphic">graphic</a>
              <a  href="#website" data-filter=".website">website</a>
              <a  href="#mobile" data-filter=".mobile">mobile</a>
            </div>
            <div id="portfolio-grid">
              <div className="portfolio-item graphic">
                <a data-rel="prettyPhoto" rel="noopener noreferrer" target="_blank" href="https://monikarangta.wordpress.com/" >
                  <div className="hover">
                    <div className="title">
                      Logo for my personal blog
                    </div>
                    <span className="icon"></span>
                  </div>
                  <img src="images/Idle_hours_logo.png" alt="portfolio-item" />
                </a>
              </div>
              <div className="portfolio-item website">
                <a data-rel="prettyPhoto" rel="noopener noreferrer" target="_blank"  href="https://piggame.monikarangta.com/" >
                  <div className="hover">
                    <div className="title">
                      Pig Game in Javascript
                    </div>
                    <span className="icon"></span>
                  </div>
                  <img src="images/piggame.JPG" alt="portfolio-item" />
                </a>
              </div>
            </div>
            <div className="m-50-v text-center">
              <a id="hire-link" href="#contact" className="capital big le-btn m-10-h">
                get started your project
              </a>
              <a id="hire-link" href="#portfolio" className="capital big le-btn filled m-10-h">
                load more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
