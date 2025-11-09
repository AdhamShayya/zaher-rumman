
import { Metadata } from 'next';
import HomePage from './HomePage/page';

export const metadata: Metadata = {
  title: 'Home Page',
  openGraph: {
    title: 'Home Page',
    description: 'Home',
  }
};

export default function App() {
  return <HomePage />;
}
