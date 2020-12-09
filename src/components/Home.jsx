import React from "react";
import { I18nProvider, LOCALES } from "../i18n";
import translate from "../i18n/translate";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "./Home.css";
import LateralSections from "../components/LateralSections";

function Home() {
  return (
    <div className="App">
      <Carousel />
      <LateralSections />
    </div>
  );
}

export default Home;
