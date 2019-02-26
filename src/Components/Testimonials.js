import React, {Component} from 'react';

class Testimonials extends Component {
  render(){
    return(
      <div id="happy-clients" className="p-60-v">
        <h2 className="capital text-center title">Testimonials</h2>
        <i id="bg-icon" className="fa fa-smile-o"></i>
        <div className="container">
          <div className="clients-slider-holder owl-carousel owl-theme m-30-v">
            <div className="slider-item">
              <div className="avatar">
                <img src="images/client01.jpg" alt="" />
              </div>
              <div className="body">
                <blockquote>
                  <p>Monika demonstrated excellent management skills as she ensured all the projects she worked on ran smoothly while balancing the expectations of stakeholders, be they technical, creatives, management or clients. She is a positive team player, eager to learn, and gets things done. I admire her work ethic as she took ownership of the projects. </p>
                  <div className="source">Rajat Luthra</div>
                  <div className="position">Webcom Systems Pvt. Ltd., Managing Director</div>
                </blockquote>
              </div>
            </div>
            <div className="slider-item">
              <div className="avatar">
                <img src="images/client02.jpg" alt="" />
              </div>
              <div className="body">
                <blockquote>
                  <p>Best kid on the block. Filled with enthusiasm and dedicated towards her work. I believe her skills, experience and attitude hold her in great stead. </p>
                  <div className="source">Sameer Grover</div>
                  <div className="position">Gold VIP Technologies, Founder and CEO</div>
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
