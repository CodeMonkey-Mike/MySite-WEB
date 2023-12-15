// @ts-nocheck
import React, {useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { theme } from 'theme';
import { GlobalStyle } from 'styled/global.style';
import { client } from 'helper/apollo';
// Import Swiper styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';
import 'quill/dist/quill.snow.css';
import 'react-loading-skeleton/dist/skeleton.css';

export default function NextApp({ Component, pageProps }: AppProps) {
  useEffect(()  => {
    AOS.init({
      duration : 1000,
      once: false,
    });
  },[]);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} /> 
      </ThemeProvider>
    </ApolloProvider>
  );
}