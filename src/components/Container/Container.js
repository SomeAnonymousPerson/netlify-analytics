import React from 'react';

const Container = props => {
  const { element, children } = props;
  const HtmlTag = element || 'div';

  return <HtmlTag>{children}</HtmlTag>;
};

export default Container;
