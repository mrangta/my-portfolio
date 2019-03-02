import React, {Component} from 'react';

class Home extends Component {
  render(){
    return(
      <section id="home" className="page active">
        <div className="container">
          <Navbar/>
          <HomeContent/>
        </div>
      </section>
    );
  }
}
export default Home;

class Navbar extends Component {
  render(){
    return(
      <div className="col-xs-12 col-lg-7">
        <div id="avatar-nav-holder">
          <div className="nav-link-holder">
            <a href="#about">About</a>
            <div className="line"></div>
          </div>
          <div className="nav-link-holder">
            <a href="#portfolio">Portfolio</a>
            <div className="line"></div>
          </div>
          <div className="nav-link-holder">
            <a href="https://monikarangta.wordpress.com/">Blog</a>
            <div className="line"></div>
          </div>
          <div className="nav-link-holder">
            <a href="#contact">Contact</a>
            <div className="line"></div>
          </div>
          <div id="avatar" >
            <img src="images/avatar.JPG" alt="avatar" />
          </div>
          <div id="available-label" href="#contact" className="available">
              <span   className="small light">I'm available for</span>
              <span id="freelance-link"  href="#contact"  className="uppercase">freelance</span>
          </div>
          <div id="title">
            <h1>I'm <span className="highlight capital">Monika Rangta</span></h1>
            <div  className="uppercase caption text-center text-medium">Project Manager, Web Developer & Quality Analyst</div>
          </div>
        </div>
      </div>
    );
  }
}

class HomeContent extends Component {
  render(){
    return(
      <div className="col-xs-12 col-lg-5">
        <div className="content">
          <ul className="iconic-list">
            <li><i className="fa fa-map-marker"></i> Döbelninkattu 3B 11, 00260 Helsinki, Finland.</li>
            <li><i className="fa fa-phone"></i> +358 451686586</li>
            <li><i className="fa fa-envelope"></i> <a href="mailto:monikarangta@icloud.com">monikarangta@icloud.com</a></li>
            <li><i className="fa fa-skype"></i> monika.rangta_1</li>
            <li><i className="fa fa-whatsapp"></i> +91 8968698453</li>
          </ul>
          <p>
            My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some coding, some creativity and some style.
          </p>
          <p>
            If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
          </p>
          <br/>
          <div className="text-center">
            <a id="hire-link" href="#contact" className="le-btn outline capital">Hire me <i className="fa fa-laptop"></i></a>&nbsp;
            <a href="./doc/monika.rangta.CV.pdf" rel="noopener noreferrer" target="_blank"  className="le-btn filled capital">Download CV <i className="fa fa-download"></i></a>
          </div>
        </div>
      </div>
    );
  }
}
