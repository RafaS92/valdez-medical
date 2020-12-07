import React from "react";
import "./Services.css";
import * as servicesData from "../data/servicesData.json";

function Services() {
  return (
    <div className="services-container">
      {servicesData.features.map((service) => (
        <div key={service.key}>
          <div className="card">
            <div className="card-img">
              <img src={service.image} alt="" />
            </div>
            <div className="card-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div>
              <h4>More info</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
