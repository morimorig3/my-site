// import 'modern-css-reset/dist/reset.min.css';
import '@/styles/globals.css';
import '@/styles/tailwind.css';
import usePageView from '@/hooks/usePageView';

function MyApp({ Component, pageProps }) {
  usePageView();
  return <Component {...pageProps} />;
}

export default MyApp;
