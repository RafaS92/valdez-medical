import React from "react";
import "./Services.css";
import ServicesItem from "./ServicesItem";
import * as servicesData from "../data/servicesData.json";

function Services() {
  return (
    <>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ServicesItem
              src="https://www.med.unc.edu/pediatrics/files/2018/05/Peds_EM_Banner1-800x420.jpg"
              text="Eating plan with emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products."
              label="Alimentary Plan"
              path="/services"
            />
            <ServicesItem
              src="https://hutchhealth.com/wp-content/uploads/2019/04/OccMed-01.jpg"
              text="Personalized workout plans your clients will love! Access the full video library with hundreds of pre-recorded exercises for you."
              label="Workout Rutines"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <ServicesItem
              src="https://cdn.shopify.com/s/files/1/2513/1396/files/face-place-medical-aesthetics-banner_grande.jpg?v=1525792385"
              text="Medical, surgical, dental, and professional dietitian."
              label="Medical Services"
              path="/services"
            />
            <ServicesItem
              src="https://www.marketplace.org/wp-content/uploads/2018/06/GettyImages-71265251.jpg?fit=1800%2C1000"
              text="Sleep therapies to prevent sleep disorders or insomnia."
              label="Sleep Therapy"
              path="/services"
            />
            <ServicesItem
              src="https://img.freepik.com/free-vector/mental-health-women-vector_53876-61377.jpg?size=338&ext=jpg&ga=GA1.2.1101768578.1606848787"
              text="Classes featured include beginner yoga classes, vinyasa yoga, hatha yoga, free meditation classes."
              label="Yoga Classes"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <ServicesItem
              src="https://d2ngl0nkh8z0ib.cloudfront.net/dragonfly-uploads/2018/12/20/17/17/51/b0a6c2a7-23e5-4685-b7f3-bb07e1b2273c/Elderly_20woman_20laughing_20with_20her_20nurse-_20640_20x_20460.jpg"
              text="What makes us different?"
              text2="You, the client is what makes us different. Our job is to become a catalyst for your results. We are highly educated and knowledgeable, however you are the most important component in the equation."
              label="Why us?"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Services;
