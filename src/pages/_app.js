import '@/styles/globals.css';

/**
 * The custom App component wraps every page. It ensures that global
 * TailwindCSS styles are loaded across the entire application.
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}