import React from 'react';
import './List.css';

const List = props => {
  const { element, children, className } = props;
  const HtmlTag = element || 'ul';
  let classNames = ['List'];

  if (className) classNames.push(className);

  return <HtmlTag className={classNames.join(' ')}>{children}</HtmlTag>;
};

export default List;
