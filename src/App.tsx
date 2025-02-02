import "./App.css";
import { useTranslation } from "react-i18next";
import { About } from "./About.tsx";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation("main");
  const [showAbout, setShowAbout] = useState(false);

  const handleChangeLanguage = () => {
    let language;
    if (i18n.language === "ru") {
      language = "en";
    } else if (i18n.language === "en") {
      language = "es";
    } else {
      language = "ru";
    }

    i18n.changeLanguage(language);
  };

  console.log(i18n.store.data);

  t("hello"); // Hello my friend

  return (
    <div>
      <h1>{t("text.hello")}</h1>
      <h2>{t("text.yourName", { name: "Артём" })}</h2>
      {showAbout && <About />}

      <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
      <button onClick={() => setShowAbout((prev) => !prev)}>
        Show about page
      </button>
    </div>
  );
}

export default App;
