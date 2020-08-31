import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PageLayout({ children }: any) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
