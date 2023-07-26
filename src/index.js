import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('./locales/en.json'),
    },
    si: {
      translation: require('./locales/si.json'),
    },
  },
  lng: window.navigator.language || 'en', // Use browser language or fallback to English
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
