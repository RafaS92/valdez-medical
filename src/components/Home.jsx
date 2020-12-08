import React from "react";
import { I18nProvider, LOCALES } from "../i18n";
import translate from "../i18n/translate";
import Carousel from "./Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <Carousel />
      <h1>{translate("hi")}</h1>
    </div>
  );
}

export default Home;
