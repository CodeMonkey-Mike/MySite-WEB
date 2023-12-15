import React from 'react';
import { Home } from 'containers';
import Head from 'next/head';

const Index: React.FC = () => {
  return  (
  <>
    <Head>
      <title>Mike Neder</title>
    </Head>
    <Home />
  </>
  ); 
};

export default Index;
