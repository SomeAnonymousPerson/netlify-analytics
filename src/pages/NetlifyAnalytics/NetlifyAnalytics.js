import React from 'react';
import './NetlifyAnalytics.css';

import SectionRenderer from '../../renderer/SectionRenderer';

const NetlifyAnalytics = props => {
  console.log(props.data);
  const { data } = props;
  const sections = data.sections.map((section, index) => {
    const { Component, content } = section;
    return (
      <SectionRenderer key={index} component={Component} content={content} />
    );
  });

  return sections;
};

export default NetlifyAnalytics;
