import React from 'react'
import CollectionPage from '../../../screens/CollectionPage';
import withTranslationProvider from '../../../hoc/withTranslationProvider';
async function Collection(properties: any) {
  return withTranslationProvider(CollectionPage, properties);
}

export default Collection