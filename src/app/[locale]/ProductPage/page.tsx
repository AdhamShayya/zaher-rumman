// ProductPage.tsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import withTranslationProvider from '../../../hoc/withTranslationProvider';
import ProductPage from '../../../screens/ProductPage';
async function Product(properties: any) {
  return withTranslationProvider(ProductPage, properties);
}
export default Product