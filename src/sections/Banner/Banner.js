import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Container from '../../components/Container';
import Image from '../../components/Image';
import Button from '../../components/Button';

const Banner = props => {
  const { heading, paragraph, image, cta } = props.content;
  return (
    <section>
      <Container>
        <div>
          <Heading element={heading.options.element}>{heading.text}</Heading>
          <Paragraph>{paragraph.text}</Paragraph>
          {cta.url && <Button href={cta.url}>{cta.label}</Button>}
        </div>
        {image.src && <Image src={image.src} alt={image.alt} />}
      </Container>
    </section>
  );
};

export default Banner;
