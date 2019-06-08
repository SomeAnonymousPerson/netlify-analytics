import React from 'react';
import './Button.css';

const Button = props => {
  const { element, children, href, className } = props;
  const HtmlTag = element || 'a';

  let classNames = ['Button'];

  if (className) classNames.push(className);

  return (
    <HtmlTag href={href} className={classNames.join(' ')}>
      {children}
    </HtmlTag>
  );
};

export default Button;
