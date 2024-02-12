import { useEffect } from 'react';
import 'styles/global.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) loader.style.display = 'none';
    }
  }, []);

  return <Component {...pageProps} />;
}
