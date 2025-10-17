import React from 'react'
import { useTranslation } from 'react-i18next'
import withTranslationProvider from '../../../hoc/withTranslationProvider';
import HomePage from '../../../screens/HomePage';
async function Home(properties: any) {
  return withTranslationProvider(HomePage, properties);
}

export default Home