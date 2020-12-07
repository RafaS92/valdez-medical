import "./App.css";
import Home from "./components/Home";
import { I18nProvider, LOCALES } from "./i18n";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <I18nProvider locale={LOCALES.SPANISH}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </I18nProvider>
    </>
  );
}

export default App;
