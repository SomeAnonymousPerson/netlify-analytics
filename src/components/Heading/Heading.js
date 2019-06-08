import React from 'react';
import './Heading.css';

const Heading = props => {
  const { element, children, className, variant } = props;
  const HtmlTag = element || '<h2>';

  let classNames = ['Heading'];

  if (variant) classNames.push(variant);
  if (className) classNames.push(className);

  return <HtmlTag className={classNames.join(' ')}>{children}</HtmlTag>;
};

export default Heading;
