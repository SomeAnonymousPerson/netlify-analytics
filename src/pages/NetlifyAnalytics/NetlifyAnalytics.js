import React from 'react';
import './NetlifyAnalytics.css';

import data from '../../data/data.js';

import SectionRenderer from '../../renderer/SectionRenderer';

const NetlifyAnalytics = () => {
  const sections = data.sections.map((section, index) => {
    const { Component, content } = section;
    return (
      <SectionRenderer key={index} component={Component} content={content} />
    );
  });

  return sections;
};

export default NetlifyAnalytics;
