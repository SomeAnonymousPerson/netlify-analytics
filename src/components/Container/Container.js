import React from 'react';
import './Container.css';

const sizes = {
  Narrow: 'Container--narrow'
};

const Container = props => {
  const { element, children, size, className } = props;
  const HtmlTag = element || 'div';

  var classNames = ['Container'];

  if (size) classNames.push(sizes[size]);
  if (className) classNames.push(className);

  return <HtmlTag className={classNames.join(' ')}>{children}</HtmlTag>;
};

export default Container;
