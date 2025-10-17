'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage({ locale }: { locale: string }) {
  const translate = useTranslation('default').t;


  return (
    <div>
      <h1>{translate('common:homePage.title')}</h1>
      <h2>{translate('common:homePage.welcomeMessage')}</h2>
      <p>{translate('common:homePage.subtitle')}</p>
      <button>{translate('common:homePage.startJourney')}</button>
    </div>
  );
}

export default HomePage;