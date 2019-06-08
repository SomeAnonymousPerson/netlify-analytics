import React from 'react';
import './Layout.css';

import Header from '../Header';
import NetlifyAnalytics from '../../pages/NetlifyAnalytics';
import Footer from '../Footer';

import data from '../../data/data.js';

const Layout = () => {
  return (
    <>
      <Header />
      <NetlifyAnalytics data={data} />
      <Footer />
    </>
  );
};

export default Layout;
