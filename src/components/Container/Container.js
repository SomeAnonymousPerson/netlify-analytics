import React from 'react';
import './Container.css';

const sizes = {
  Narrow: 'Container--narrow'
};

const Container = props => {
  const { element, children, size } = props;
  const HtmlTag = element || 'div';

  var classNames = ['Container'];

  if (size) classNames.push(sizes[size]);

  return <HtmlTag className={classNames.join(' ')}>{children}</HtmlTag>;
};

export default Container;
