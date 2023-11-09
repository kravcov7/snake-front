import "../styles/index.css";
import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {

  return (
          <main >
            <Component
              {...pageProps}
            />
          </main>
  );
};

export default App;
