import React from "react";
import { useContext } from "react"
import { Language, LanguageContext } from "../context/Language";

function Buttons() {
  
  const func = useContext(LanguageContext)

  return (
    <div className="row">
      <div className="col">
        <button onClick={() => func.toggleLanguage(Language.RU)} className="btn btn-primary w-100">Сменить на русский</button>
      </div>
      <div className="col">
        <button onClick={() => func.toggleLanguage(Language.CHE)} className="btn btn-primary w-100">Сменить на чеченский</button>
      </div>
      <div className="col">
        <button onClick={() => func.toggleLanguage(Language.ENG)} className="btn btn-primary w-100">Сменить на английский</button>
      </div>
    </div>
  );
}

export default Buttons;
