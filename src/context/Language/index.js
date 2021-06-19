import { createContext } from 'react';

export const text = {
  ru: {
    welcome: 'Добро пожаловать!',
    title: 'Главная страница',
    appDescription: 'Приложение с возможностью смены языка интерфейса',
    setToRussian: 'Сменить на русский',
    setToChechen: 'Сменить на чеченский'
  },
  che: {
    welcome: 'Марша вогIийла!',
    title: 'Коьрта агIо',
    appDescription: 'Мотт хийца йиш йолуш йолу приложени',
    setToRussian: 'Оьрсийн моттахь',
    setToChechen: 'Нохчийн маттахь'
  }
}

export const LanguageContext = createContext({
  current: 'ru',
  text: text.ru,
  toggleLanguage: () => {}
})
