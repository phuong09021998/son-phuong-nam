import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function PageLayout({ children }: any) {
  return (
    <Fragment>
      <Head>
        <title>Công Ty TNHH MTV Xây Dựng Sơn Phương Nam</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
