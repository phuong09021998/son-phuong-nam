import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import RegisterLogin from '../../components/LoginRegister';
import ScrolToTop from 'components/ScrollToTop';

export default function MainLayout({ children, title, contacts }: any) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      {children}
      <RegisterLogin />
      <ScrolToTop />
      <Footer contacts={contacts} />
    </Fragment>
  );
}
