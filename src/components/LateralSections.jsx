import React from "react";
import { Button } from "./Button";
import "./LateralSections.css";

function LateralSections() {
  return (
    <div className="sections-container">
      <div className="first">
        <img
          src="https://www.johnlocke.org/app/uploads/2016/02/Direct-primary-care-doctor-1024x683.jpeg"
          alt=""
        />
        <div className="first-text">
          <h1>Our History</h1>
          <p>
            We believe healthcare should be personal, accessible and
            coordinated. At Village Medical, your relationship with your primary
            care provider is the foundation to your health. Our doctors and
            staff partner with you to understand your needs, and work together
            to focus not just on treatment, but also education and preventive
            care.
          </p>
          <Button className="button" buttonStyle="btn--outline">
            Learn more
          </Button>
        </div>
      </div>
      <div className="second">
        <div className="second-text">
          <h1>Our Services</h1>
          <p>
            We believe healthcare should be personal, accessible and
            coordinated. At Village Medical, your relationship with your primary
            care provider is the foundation to your health. Our doctors and
            staff partner with you to understand your needs, and work together
            to focus not just on treatment, but also education and preventive
            care.
          </p>

          <div className="list-section">
            <p>We're here for various health needs, including:</p>
            <ul>
              <li>- Wellness</li>
              <li>- Adult care</li>
              <li>- Drugs</li>
              <li>- Blood test</li>
              <li>- Vaccines</li>
            </ul>
            <Button className="button2" buttonStyle="btn--outline">
              Explore Services
            </Button>
          </div>
        </div>
        <img
          src="https://i.cbc.ca/1.4389279.1532115488!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/doctor-with-patient.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default LateralSections;
