import React, {Component} from 'react';


class Blog extends Component {
  render(){
    return(
      <section id="blog" className="page">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h1 className="capital">from the blog</h1>
              <span className="capital">latest news are available</span>
            </div>
            <a href="#home"  className="close-btn">
              <i className="fa fa-close"></i>
            </a>
          </div>
          <div className="content">
            <div id="blog-grid" className="row">
              <div className="col-xs-12 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                <div className="blog-item">
                  <div className="thumbnail-holder">
                    <a className="nav-link" href="#single-post">
                      <img src="images/blog01.jpg" alt="" />
                    </a>
                    <div className="post-icon">
                      <i className="fa fa-image"></i>
                    </div>
                  </div>
                  <div className="body">
                    <h1><a className="nav-link" href="#single-post">blog post title here</a></h1>
                    <ul className="meta">
                      <li><i className="fa fa-calendar"></i> jan 04,2016</li>
                      <li><i className="fa fa-user"></i> john doe</li>
                      <li><i className="fa fa-comment"></i> 8 comments</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus ligula, et hendrerit nisi. Vestibulum vitae condimentum quam, et pellentesque diam. Fusce in mollis mi.
                    </p>
                    <a href="#single-post" className="readmore nav-link capital">read more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="blog-item">
                  <div className="thumbnail-holder ">
                    <div className="slider-thumbs">
                      <a className="nav-link" href="#single-post"><img src="images/blog02.jpg" alt="" /></a>
                      <a className="nav-link" href="#single-post"><img src="images/blog03.jpg" alt="" /></a>
                      <a className="nav-link" href="#single-post"><img src="images/blog01.jpg" alt="" /></a>
                    </div>
                    <div className="post-icon">
                      <i className="fa fa-image"></i>
                    </div>
                  </div>
                  <div className="body">
                    <h1><a className="nav-link" href="#single-post">blog post title here</a></h1>
                    <ul className="meta">
                      <li><i className="fa fa-calendar"></i> jan 04,2016</li>
                      <li><i className="fa fa-user"></i> john doe</li>
                      <li><i className="fa fa-comment"></i> 8 comments</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus ligula, et hendrerit nisi. Vestibulum vitae condimentum quam, et pellentesque diam. Fusce in mollis mi.
                    </p>
                    <a href="#single-post" className="readmore nav-link capital">read more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="blog-item">
                  <div className="thumbnail-holder">
                    <a className="nav-link" href="#single-post"><img src="images/blog03.jpg" alt="" /></a>
                    <div className="post-icon">
                      <i className="fa fa-youtube-play"></i>
                    </div>
                  </div>
                  <div className="body">
                    <h1><a className="nav-link" href="#single-post">blog post title here</a></h1>
                    <ul className="meta">
                      <li><i className="fa fa-calendar"></i> jan 04,2016</li>
                      <li><i className="fa fa-user"></i> john doe</li>
                      <li><i className="fa fa-comment"></i> 8 comments</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus ligula, et hendrerit nisi. Vestibulum vitae condimentum quam, et pellentesque diam. Fusce in mollis mi.
                    </p>
                    <a href="#single-post" className="readmore nav-link capital">read more...</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="blog-item">
                  <div className="quote-holder blue uppercase">
                    <blockquote>
                      good design goes to heaven, bad design goes everywhere.
                    </blockquote>
                    <div className="post-icon">
                      <i className="fa fa-pencil"></i>
                    </div>
                  </div>
                  <div className="body">
                    <h1><a className="nav-link" href="#single-post">blog post title here</a></h1>
                    <ul className="meta">
                      <li><i className="fa fa-calendar"></i> jan 04,2016</li>
                      <li><i className="fa fa-user"></i> john doe</li>
                      <li><i className="fa fa-comment"></i> 8 comments</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus ligula, et hendrerit nisi. Vestibulum vitae condimentum quam, et pellentesque diam. Fusce in mollis mi.
                    </p>
                    <a href="#single-post" className="readmore nav-link capital">read more...</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mT100 text-center">
              <a className="le-btn filled capital big" href="#loadmore">load more</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Blog;
