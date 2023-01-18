import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import img1 from "../Assets/homepage2.jpg";
import img2 from "../Assets/homepage3.jpg";
import img3 from "../Assets/homepage4.jpg";
import img4 from "../Assets/homepage5.jpg";



class Slideshow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 800,
      autoplay: true,
      transitionDuration: 400,
      arrows: true,
      infinite: true,
      easing: "ease",
    };

    const slideImages = [img2, img3, img1, img4, img2, img3, img1, img4];

    return (
      <div style={{ width: "80%", margin: "auto" , marginTop:"15px" }} className="App">
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img
                  style={{ width: "100%" }}
                  className="lazy"
                  src={each}
                  alt="sample"
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    );
  }
}

export default Slideshow;
