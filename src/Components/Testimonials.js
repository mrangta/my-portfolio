import React, {Component} from 'react';

class Testimonials extends Component {
  render(){
    return(
      <div id="happy-clients" className="p-60-v">
        <h2 className="capital text-center title">my happy clients</h2>
        <i id="bg-icon" className="fa fa-smile-o"></i>
        <div className="container">
          <div className="clients-slider-holder owl-carousel owl-theme m-30-v">
            <div className="slider-item">
              <div className="avatar">
                <img src="images/client01.jpg" alt="" />
              </div>
              <div className="body">
                <blockquote>
                  <p>I'm Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra quam quis diam imperdiet semper. Ut sed purus ut quam ornare tincidunt vel vel velit.</p>
                  <div className="source">alexander doe</div>
                  <div className="position">modern llc,hr</div>
                </blockquote>
              </div>
            </div>
            <div className="slider-item">
              <div className="avatar">
                <img src="images/client01.jpg" alt="" />
              </div>
              <div className="body">
                <blockquote>
                  <p>I'm Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra quam quis diam imperdiet semper. Ut sed purus ut quam ornare tincidunt vel vel velit.</p>
                  <div className="source">alexander doe</div>
                  <div className="position">modern llc,hr</div>
                </blockquote>
              </div>
            </div>
            <div className="slider-item">
              <div className="avatar">
                <img src="images/client01.jpg" alt="" />
              </div>
              <div className="body">
                <blockquote>
                  <p>I'm Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra quam quis diam imperdiet semper. Ut sed purus ut quam ornare tincidunt vel vel velit.</p>
                  <div className="source">alexander doe</div>
                  <div className="position">modern llc,hr</div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonials;
