import "./App.css";
import { I18nProvider, LOCALES } from "./i18n";
import translate from "./i18n/traslate";

function App() {
  return (
    <I18nProvider locale={LOCALES.ENGLISH}>
      <div className="App">
        <h1>{translate("hi")}</h1>
      </div>
    </I18nProvider>
  );
}

export default App;
