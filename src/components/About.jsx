import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="first-section">
        <div className="top-lay">
          <img className="top-img" />
        </div>
        <h1>Mission</h1>
        <p>
          We believe healthcare should be personal, accessible and coordinated.
          At Village Medical, your relationship with your primary care provider
          is the foundation to your health. Our doctors and staff partner with
          you to understand your needs, and work together to focus not just on
          treatment, but also education and preventive care.
        </p>
      </div>
      <div className="second-section">
        <h1>Dr. Rafael Valdez</h1>
        <img
          src="https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/21106378_1540291346035801_8633070372030813826_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=dqVry4MQWVUAX_hqTtV&_nc_ht=scontent.fhou1-2.fna&oh=a5f6301e5c24c75aa9688f0ea72c8456&oe=5FF8B60A"
          alt=""
        />

        <p>
          Dr.Valdez has been a practicing internist for over 25 years. He sees
          patients in Valdez Medical Clinic and also in the affiliated hospitals
          listed below. This means he will be your doctor both in the clinic as
          well as in the hospital, allowing for continuity of care.
        </p>
        <strong>Education</strong>
        <p>Internal Medicine Residency: University of Illinois at Chicago</p>
        <p>
          {" "}
          Advocate Christ Medical Center Medical School: NHL Medical College
          Ahmedabad India
        </p>
        <strong>Hospital Affiliations:</strong>
        <p>Clear Lake Regional Medical Center – Webster, TX</p>
        <p>Clear Lake Regional Medical Center – Webster, TX</p>
        <p>Internal Medicine Residency: University of Illinois at Chicago</p>
        <p>Clear Lake Regional Medical Center – Webster, TX</p>
        <strong>Publications</strong>
        <p>Clear Lake Regional Medical Center – Webster, TX</p>
        <p>Clear Lake Regional Medical Center – Webster, TX</p>
        <p>Internal Medicine Residency: University of Illinois at Chicago</p>
        <p>Clear Lake Regional Medical Center – Webster, TX</p>
        <strong>Professional Societies: </strong>
        <p>Clear Lake Regional Medical Center – Webster, TX</p>
      </div>
    </div>
  );
}

export default About;
