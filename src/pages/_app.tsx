import '@/styles/tailwind.css';
import { usePageView } from '@/hooks/usePageView';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }) {
  usePageView();
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
