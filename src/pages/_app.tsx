import "../styles/index.css";
import React, { useState, ReactElement, ReactNode } from 'react';
import { NextPage } from "next";
import { useRouter } from 'next/router';
import type { AppProps } from "next/app";
// import './globals.css'; 
// import styles from './App.module.scss';
// import 'normalize.css';
// import '../styles/index.scss';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'react-toastify/dist/ReactToastify.min.css';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };

const GlobusApp = ({
  Component,
  pageProps,

}: AppPropsWithLayout) => {
  const { route, locale, events } = useRouter();
  const [data, setData] = useState({});
  const [headerColor, setHeaderColor] = useState('dark');

  return (
          <main >
            <Component
              setHeaderColor={setHeaderColor}
              locale={locale}
              {...pageProps}
            />
          </main>
  );
};

// GlobusApp.getInitialProps = async ({ router }) => {
//   const { locale } = router;

//   return {
//     locale
//   };
// };

export default GlobusApp;
