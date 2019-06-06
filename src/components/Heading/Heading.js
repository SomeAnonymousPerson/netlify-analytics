import React from 'react';

const Heading = props => {
  const { element, children } = props;
  const HtmlTag = element || '<h2>';

  return <HtmlTag>{children}</HtmlTag>;
};

export default Heading;
