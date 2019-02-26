import React, {Component} from 'react';
class ContactForm extends Component {

  render(){
    return(
      <div id="contact-form" className="m-50-v">
        <h1 className="text-center dark">SAY Hello!</h1>
        <div className="contact-form-holder m-25-v">
          <div className="message-box"></div>
          <form className="contact-form" method="post" >
            <div className="col-xs-12 col-sm-6 ">
              <div className="control-group">
                <div className="controls">
                  <input  id="cname" data-placeholder="Your Name*" name="name" size="25" className="le-input  required col-xs-12"  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 ">
              <div className="control-group">
                <div className="controls">
                  <input id="cemail" data-placeholder="Your Email*" name="email" className="le-input  required email col-xs-12" />
                </div>
              </div>
            </div>
            <div className="col-xs-12  ">
              <div className="control-group">
                <div className="controls">
                  <input  id="subject" data-placeholder="Subject" name="subject" size="25" className="le-input col-xs-12"  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 ">
              <div className="control-group">
                <div className="controls">
                  <textarea id="ccomment" className=" le-input col-xs-12" name="message" rows="12"  cols="5" data-placeholder="Message" ></textarea>
                </div>
              </div>
            </div>
            <div className="col-xs-12 m-25-v">
              <div className="button-holder">
                <input className="submit filled le-btn wide bold500" type="submit" value="SEND" />
              </div>
              <div id="loading" className="pull-right">
                <img alt="" src="images/loader.gif" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
