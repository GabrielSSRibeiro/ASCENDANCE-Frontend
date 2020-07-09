import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const defaultLanguage = "portuguese";
  const supportedLangages = [defaultLanguage];

  const [language, setLanguage] = useState(defaultLanguage);
  localStorage.setItem("language", language);

  function HandleLanguage(newLanguage) {
    if (supportedLangages.find((value) => value === newLanguage)) {
      localStorage.setItem("language", language);
      setLanguage(newLanguage);
    }
  }

  return (
    <LanguageContext.Provider value={{ language, HandleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);

  return context;
}
