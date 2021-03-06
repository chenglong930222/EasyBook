import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
class CarouselTop extends Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://upload.jianshu.io/admin_banners/web_images/4815/f472c99bab23664f1bd73eaefcdd6b3931526077.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://upload.jianshu.io/admin_banners/web_images/4815/f472c99bab23664f1bd73eaefcdd6b3931526077.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://upload.jianshu.io/admin_banners/web_images/4815/f472c99bab23664f1bd73eaefcdd6b3931526077.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
export default connect(null, null)(CarouselTop);