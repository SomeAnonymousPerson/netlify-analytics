import React from 'react';

const Image = props => {
  const { src, alt, className } = props;

  let classNames = ['Image'];

  if (className) classNames.push(className);

  // Using the native lazy loading solution here just for the demo
  return (
    <img src={src} alt={alt} className={classNames.join(' ')} loading="lazy" />
  );
};

export default Image;
