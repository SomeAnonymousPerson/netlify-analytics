import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';

const SmallerFeatures = props => {
  // SmallerFeatures content model accepts an array
  return props.content.map((smallFeature, index) => {
    const { heading, paragraph, image } = smallFeature;
    return (
      <section key={index}>
        <div>
          <Image src={image.src} alt={image.alt} />
          <Heading element={heading.options.element}>{heading.text}</Heading>
          <Paragraph>{paragraph.text}</Paragraph>
        </div>
      </section>
    );
  });
};

export default SmallerFeatures;
