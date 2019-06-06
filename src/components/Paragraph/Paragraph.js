import React from 'react';
import './Paragraph.css';

const Text = props => {
  const { element, children, className } = props;
  const HtmlTag = element || 'p';
  let classNames = ['Paragraph'];

  if (className) classNames.push(className);

  return <HtmlTag className={classNames.join(' ')}>{children}</HtmlTag>;
};

export default Text;
