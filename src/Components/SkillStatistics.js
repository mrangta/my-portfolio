import React, {Component} from 'react';

class SkillStatistics extends Component {
  render(){
    return(
      <div>
        <Statistics/>
        <Skills/>
      </div>
    );
  }
}

export default SkillStatistics;

class Statistics extends Component {
  render(){
    return(
      <div id="statistics-holder">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="eq-dimensions stat-item">
              <div className="body">
                <div className="lbl">
                  happy clients
                </div>
                <div className="value">30+</div>
              </div>
              <div className="icon">
                <i className="fa fa-group"></i>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="eq-dimensions stat-item">
              <div className="body">
                <div className="lbl">
                  musics listened
                </div>
                <div className="value">800+</div>
              </div>
              <div className="icon">
                <i className="fa fa-music"></i>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="eq-dimensions stat-item">
              <div className="body">
                <div className="lbl">
                  projects managed
                </div>
                <div className="value">40+</div>
              </div>
              <div className="icon">
                <i className="fa fa-list"></i>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="eq-dimensions stat-item">
              <div className="body">
                <div className="lbl">
                  coffee cups
                </div>
                <div className="value">900+</div>
              </div>
              <div className="icon">
                <i className="fa fa-coffee"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Skills extends Component {
  render(){
    return(
      <div id="skills" className="m-100-v">
        <h1 className="uppercase text-center mB50">professional skills</h1>
        <div className="row">
          <div className="col-xs-12 col-lg-6 ">
            <h3>designing skills</h3>
            <div className="skill-item line wow fadeInUp" data-wow-delay="100ms" data-percent="90">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>html</label>
            </div>
            <div className="skill-item line wow fadeInUp" data-wow-delay="200ms"  data-percent="85">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>css</label>
            </div>
            <div className="skill-item line wow fadeInUp" data-wow-delay="300ms"  data-percent="60">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>javascript</label>
            </div>
            <div className="skill-item line wow fadeInUp" data-wow-delay="400ms"  data-percent="40">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>photoshop</label>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6 ">
            <h3>development skills</h3>
            <div className="skill-item line wow fadeInUp" data-wow-delay="100ms"  data-percent="45">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>ReactJS</label>
            </div>
            <div className="skill-item line wow fadeInUp" data-wow-delay="200ms"  data-percent="55">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>C#</label>
            </div>
            <div className="skill-item line wow fadeInUp" data-wow-delay="300ms"  data-percent="20">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>Python</label>
            </div>
            <div className="skill-item line wow fadeInUp" data-wow-delay="400ms"  data-percent="30">
              <div className="skill-bar"><div className="bar"></div></div>
              <label>Java</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6 ">
            <h3>language skills</h3>
            <div className="skill-item dotted wow fadeInUp" data-wow-delay="100ms" data-percent="80" >
              <div className="skill-dots"><div className="prg"><span className="empty init"></span></div></div>
              <label>english</label>
            </div>
            <div className="skill-item dotted wow fadeInUp" data-wow-delay="200ms" data-percent="25">
              <div className="skill-dots"><div className="prg"><span className="empty init"></span></div></div>
              <label>Finnish</label>
            </div>
            <div className="skill-item dotted wow fadeInUp" data-wow-delay="300ms" data-percent="99">
              <div className="skill-dots"><div className="prg"><span className="empty init"></span></div></div>
              <label>Hindi</label>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6 ">
            <h3>knowledge base</h3>
            <div className="row no-padding m-15-v">
            <div className="col-xs-12 col-sm-4 no-padding wow fadeInUp" data-wow-delay="200ms">
              <ul className="iconic-ul">
                <li>
                  <i className="fa fa-check-circle-o"></i>
                  designing
                </li>
                <li>
                  <i className="fa fa-check-circle-o"></i>
                  development
                </li>
                <li>
                  <i className="fa fa-check-circle-o"></i>
                  graphics
                </li>
              </ul>
            </div>
              <div className="col-xs-12 col-sm-4 no-padding wow fadeInUp" data-wow-delay="100ms">
                <ul className="iconic-ul">
                  <li>
                    <i className="fa fa-check-circle-o"></i>
                    agile project management
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>
                    Client Handling
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>
                    wireframe & annotation designing
                  </li>

                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 no-padding wow fadeInUp" data-wow-delay="300ms">
                <ul className="iconic-ul">
                  <li>
                    <i className="fa fa-check-circle-o"></i>
                    cricket
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>
                    hiking
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>
                    swimming
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
