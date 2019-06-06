import React from 'react';

const Image = props => {
  const { src, alt } = props;

  return <img src={src} alt={alt} className="Image" />;
};

export default Image;
