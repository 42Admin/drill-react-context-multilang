import React, { useContext } from "react";
import { LanguageContext, LanguageContextType } from "../context/Language";
import PageTitle from "./PageTitle";
import PageContent from "./PageContent";

function MainPage() {
  const language: LanguageContextType = useContext(LanguageContext);

  return (
    <div>
      <PageTitle>{language.text.title}</PageTitle>
      <PageContent />
    </div>
  );
}

export default MainPage;
