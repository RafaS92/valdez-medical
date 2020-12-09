import "./App.css";
import Home from "./components/Home";
import { I18nProvider, LOCALES } from "./i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <I18nProvider locale={LOCALES.ENGLISH}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
          </Switch>
          <Footer />
        </Router>
      </I18nProvider>
    </>
  );
}

export default App;
