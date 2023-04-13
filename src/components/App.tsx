import React, { useState } from "react";
import MainPage from "./MainPage";
import {
  Language,
  LanguageContext,
  LanguageContextType,
  text,
} from "../context/Language";

function App(): JSX.Element {
  const [language, setLanguage] = useState<Language>(Language.RU);

  const toggleLanguage = (value: Language): void => {
    setLanguage(value);
  };

  const defaultContextValue: LanguageContextType = {
    current: language,
    text: text[language],
    toggleLanguage: toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={defaultContextValue}>
      <MainPage />
    </LanguageContext.Provider>
  );
}

export default App;
