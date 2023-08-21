import "bootstrap/dist/css/bootstrap.css";
import "@/styles/animation.css";
import "@/styles/google-font.css";
// import '@/styles/icon-font.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "@/styles/main.css";
import "@/styles/responsive.css";
import React from "react";
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
