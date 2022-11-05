import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyles';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="엘라의 항공사 웹사이트의 컴포넌트 접근성 높이기 미션" />
      <title>Homebrary</title>
    </Head>
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer limit={1} />
      </ThemeProvider>
    </RecoilRoot>
  </>
);

export default App;
