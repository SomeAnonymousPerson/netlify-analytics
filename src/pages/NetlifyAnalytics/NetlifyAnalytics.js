import React from 'react';
import { Helmet } from 'react-helmet';
import './NetlifyAnalytics.css';

import SectionRenderer from '../../renderer/SectionRenderer';

const NetlifyAnalytics = props => {
  const { data } = props;
  const sections = data.sections.map((section, index) => {
    const { Component, content, style } = section;
    return (
      <>
        <Helmet key="Helmet">
          <title>Netlify Analytics</title>
          <meta
            name="description"
            content="Discover Netlify Analytics with Real-time Audience tracking, Beautiful charts and KPIs."
          />
        </Helmet>
        <SectionRenderer
          key={index}
          component={Component}
          content={content}
          style={style}
        />
      </>
    );
  });

  return <main className="netlify-analytics">{sections}</main>;
};

export default NetlifyAnalytics;
