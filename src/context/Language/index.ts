import { createContext } from "react";

interface LanguageText {
  welcome: string;
  title: string;
  appDescription: string;
  setToRussian: string;
  setToChechen: string;
  setToEnglish: string;
}

export enum Language {
  RU = "ru",
  CHE = "che",
  ENG = "eng"
}

export interface LanguageContextType {
  current: Language;
  text: LanguageText;
  toggleLanguage: (language: Language) => void;
}

export const text: Record<Language, LanguageText> = {
  ru: {
    welcome: "Добро пожаловать!",
    title: "Главная страница",
    appDescription: "Приложение с возможностью смены языка интерфейса",
    setToRussian: "Сменить на русский",
    setToChechen: "Сменить на чеченский",
    setToEnglish: "Сменить на английский",
  },
  che: {
    welcome: "Марша вогIийла!",
    title: "Коьрта агIо",
    appDescription: "Мотт хийца йиш йолуш йолу приложени",
    setToRussian: "Оьрсийн моттахь",
    setToChechen: "Нохчийн маттахь",
    setToEnglish: "Ингласан маттахь",
  },
  eng: {
    welcome: "Welcome!",
    title: "Home page",
    appDescription: "Application with the ability to change the interface language",
    setToRussian: "Change to Russian",
    setToChechen: "Change to Chechen",
    setToEnglish: "Change to English",
  } 
};

export const LanguageContext = createContext<LanguageContextType>({
  current: Language.RU,
  text: text.ru,
  toggleLanguage: () => {},
});
