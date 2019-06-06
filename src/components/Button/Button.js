import React from 'react';

const Button = props => {
  const { element, children, href } = props;
  const HtmlTag = element || 'a';

  return <HtmlTag href={href}>{children}</HtmlTag>;
};

export default Button;
