import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function MainLayout({ children }: any) {
  return (
    <Fragment>
      <Head>
        <title>Công Ty TNHH MTV Xây Dựng Sơn Phương Nam</title>
        <link rel="icon" href="/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
