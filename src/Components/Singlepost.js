import React, {Component} from 'react';

class Singlepost extends Component {
  render(){
    return(
      <section id="single-post" className="page ">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h1 className="capital">Single post page</h1>
              <span className="capital">latest news are available</span>
            </div>
            <a href="#blog"  className="close-btn">
              <i className="fa fa-close"></i>
            </a>
          </div>
          <div className="content post">
            <div id="single-image" >
              <img src="images/single-blog-image.jpg" alt="single" />
              <div className="post-icon">
                <i className="fa fa-image"></i>
              </div>
            </div>
            <h1>single post title goes here</h1>
            <ul className="meta">
              <li>jan 04,2016</li>
              <li>john doe</li>
              <li>8 comments</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus ligula, et hendrerit nisi. Vestibulum vitae condimentum quam, et pellentesque diam. Fusce in mollis mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut porttitor mauris. Ut vitae arcu massa. Etiam vehicula, metus eu pretium scelerisque, ligula felis blandit nulla, vel gravida purus nulla in nulla. Pellentesque commodo elit lacus, quis porta mauris posuere ut. Donec at tortor at metus rhoncus consequat vel faucibus arcu. Aliquam erat volutpat. Nam et vulputate orci. Integer mollis, massa tempor efficitur aliquam, eros lorem laoreet leo, sit amet vehicula est sem in justo. Curabitur arcu dolor, rutrum et urna ut, semper auctor augue. Proin porta neque quam, eu convallis diam volutpat a. Nunc feugiat, quam eget scelerisque vehicula, lorem metus vehicula nunc, vitae semper sapien augue non nibh.
            </p>
            <p>
              Fusce vitae justo vel velit luctus consequat. Proin placerat neque nisl, sit amet congue leo tempor nec. Etiam porttitor congue volutpat. Aliquam sit amet maximus odio. Etiam et lobortis lorem. In in consequat elit, pharetra tincidunt nibh. Donec tellus augue, pharetra et est ac, vulputate sollicitudin sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eu facilisis tortor.
            </p>
            <div className="row m-50-v">
              <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                <div className="circle-icon pull-left mR10">
                  <i className="fa fa-quote-left"></i>
                </div>
                <strong>
                  <i> Quisque nec arcu tincidunt lorem ornare eleifend. Etiam in lorem lacinia leo tempor placerat. Mauris efficitur tincidunt urna, eget maximus purus blandit non. </i>
                </strong>
              </div>
            </div>
            <p>
              Aenean diam sem, tempor non turpis et, fermentum rutrum tellus. Nam fermentum nibh ac justo efficitur porta. Vivamus sed magna massa. Suspendisse potenti.
            </p>
            <div id="comments" className="m-100-v" >
              <div id="disqus_thread"></div>

              <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Singlepost;
