import React from 'react';

const List = props => {
  const { className, children } = props;
  let classNames = ['ListItem'];

  if (className) classNames.push(className);

  return <li className={classNames.join(' ')}>{children}</li>;
};

export default List;
