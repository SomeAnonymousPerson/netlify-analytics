import React from 'react';

const Image = props => {
  const { src, alt, className } = props;

  let classNames = ['Image'];

  if (className) classNames.push(className);

  return <img src={src} alt={alt} className={classNames.join(' ')} />;
};

export default Image;
