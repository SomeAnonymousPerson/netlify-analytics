import React from 'react';

const Text = props => {
  const { element, children } = props;
  const HtmlTag = element || 'p';

  return <HtmlTag>{children}</HtmlTag>;
};

export default Text;
