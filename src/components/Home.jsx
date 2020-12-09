import React from "react";
import { I18nProvider, LOCALES } from "../i18n";
import translate from "../i18n/translate";
import Carousel from "./Carousel";
import Footer from "./Footer";
import "./Home.css";
import LateralSections from "./LateralSections";

function Home() {
  return (
    <div className="App">
      <Carousel />
      <LateralSections />
    </div>
  );
}

export default Home;
