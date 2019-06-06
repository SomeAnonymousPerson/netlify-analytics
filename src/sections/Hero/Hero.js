import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Container from '../../components/Container';

const Hero = props => {
  const { heading, paragraph } = props.content;
  return (
    <section>
      <Container>
        <Heading element={heading.options.element}>{heading.text}</Heading>
        <Paragraph>{paragraph.text}</Paragraph>
      </Container>
    </section>
  );
};

export default Hero;
