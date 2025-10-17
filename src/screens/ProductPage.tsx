'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ProductPage({ locale }: { locale: string }) {

      const translate = useTranslation('default').t;

  return (
    <div>
      <h1>{translate('common:productPage.title')}</h1>
      <p>{translate('common:productPage.welcomeMessage')}</p>
      <p>{translate('common:productPage.description')}</p>
    </div>
  );
}

export default ProductPage;