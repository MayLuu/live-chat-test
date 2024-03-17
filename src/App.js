import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import MessengerComponent from './components/Message';

function App() {
  const { t, i18n, ready } = useTranslation();
  const [currentLang, setCurrentLang] = useState('vi');
  function handleTranslation(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    function checkCurrentLanguage() {
      switch (i18n.language) {
        case 'en':
          setCurrentLang('English')
          break;
        case 'chi':
          setCurrentLang('Chinese')
          break;
        default:
          setCurrentLang('Vietnamese')
          break;
      };
    };
    return () => {
      checkCurrentLanguage();
    };
  }, [i18n.language]);

  const listOfDishes = t('dishes', { returnObjects: true });
  return (
    <Suspense fallback="loading">
      <button onClick={() => handleTranslation('vi')}>Vietnamese</button>
      <button onClick={() => handleTranslation('en')}>English</button>
      <button onClick={() => handleTranslation('chi')}>Chinese</button>
      <h1>Current language: {currentLang}</h1>
      <h3>{t('title')}</h3>
      {/* with certain const use constant file such as discount or opening time=> NUMBER */}
      <h3>{t('discounts.1', { returnObjects: true, something: "50" })}</h3>



      <h4> {listOfDishes.map((dish) => (
        <ul>- {dish}</ul>
      ))}</h4>
      <h2>Messenger component</h2>
      <MessengerComponent ></MessengerComponent>

    </Suspense>
  );
}

export default App;
