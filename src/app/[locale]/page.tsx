
import { Metadata } from 'next';
import HomePage from './HomePage/page';
import withTranslationProvider from '../../hoc/withTranslationProvider';
export const metadata: Metadata = {
  title:
    'Home Page',
 
  openGraph: {
    title:
     'Home Page',
    description:
'Home',
  }
};

async function App(properties: any) {
  return withTranslationProvider(HomePage, properties);
}

export default App;
