import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/animation.css'
import '@/styles/google-font.css'
// import '@/styles/icon-font.css'
import '@/styles/main.css'
import '@/styles/responsive.css'
export default function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return <Component {...pageProps} />;
}
