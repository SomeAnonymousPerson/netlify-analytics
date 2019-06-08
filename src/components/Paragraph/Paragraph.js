import React from 'react';
import './Paragraph.css';

const Text = props => {
  const { element, children, className, variant } = props;
  const HtmlTag = element || 'p';
  let classNames = ['Paragraph'];

  if (variant) classNames.push(variant);
  if (className) classNames.push(className);

  return <HtmlTag className={classNames.join(' ')}>{children}</HtmlTag>;
};

export default Text;
