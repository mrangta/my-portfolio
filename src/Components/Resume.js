import React, {Component} from 'react';

class Resume extends Component {
  render(){
    return(
      <div id="resume-holder" className="m-130-v">
        <div className="resume-title left">
          <h1 className="uppercase">education</h1>
        </div>
        <div className="resume-title right">
          <h1 className="uppercase">employment</h1>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <div  className="row resume-row">
              <div className="col-xs-12 col-md-6">
                <div className="resume-item left">
                  <div className="head">
                    <i className="dot"></i>
                    <span>01</span>
                    <div className="date">
                      2007-2009
                    </div>
                  </div>
                  <div className="body">
                    <h3 className="title capital">institute name</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="resume-item right">
                  <div className="body">
                    <h3 className="title capital">company name</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod.
                    </p>
                  </div>
                  <div className="head">
                    <div className="date">
                      2007-2009
                    </div>
                    <span>01</span>
                    <i className="dot"></i>
                  </div>
                </div>
              </div>
            </div>
            <div  className="row resume-row">
              <div className="col-xs-12 col-md-6">
                <div className="resume-item left">
                  <div className="head">
                    <i className="dot"></i>
                    <span>02</span>
                    <div className="date">
                      2007-2009
                    </div>
                  </div>
                  <div className="body">
                    <h3 className="title capital">institute name</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="resume-item right">
                  <div className="body">
                    <h3 className="title capital">company name</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum enim quis libero euismod.
                    </p>
                  </div>
                  <div className="head">
                    <div className="date">
                      2007-2009
                    </div>
                    <span>02</span>
                    <i className="dot"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Resume;
