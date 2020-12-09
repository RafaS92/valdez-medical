import React, { Component } from "react";
import { Button } from "./Button";
import "./Carousel.css";

class DemoCarousel extends Component {
  render() {
    return (
      <>
        <div className="image-doc">
          <h1 className="image-title">This Doctor is the shit</h1>
          <h2 className="image-subtitle">Exceptional care you can trust.</h2>
          <div className="buttons">
            <Button buttonStyle="btn--outline">Book an Appointment</Button>
            <Button buttonStyle="btn--outline">Services</Button>
          </div>
        </div>
      </>
    );
  }
}

export default DemoCarousel;
