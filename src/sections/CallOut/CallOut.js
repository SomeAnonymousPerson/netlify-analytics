import React from 'react';
import './CallOut.css';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Container from '../../components/Container';
import Image from '../../components/Image';
import Button from '../../components/Button';

const CallOut = props => {
  const { heading, paragraph, image, cta } = props.content;
  return (
    <Container>
      <div>
        <Heading
          element={heading.options.element}
          className="CallOut--SectionHeading"
        >
          {heading.text}
        </Heading>
        <Paragraph className="CallOut--SectionSubHeading">
          {paragraph.text}
        </Paragraph>
        {cta.url && <Button href={cta.url}>{cta.label}</Button>}
      </div>
      {image.src && <Image src={image.src} alt={image.alt} />}
    </Container>
  );
};

export default CallOut;
