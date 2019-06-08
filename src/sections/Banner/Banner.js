import React from 'react';
import './Banner.css';

import MockUp from './mockup-on-mobile.png';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Container from '../../components/Container';
import Image from '../../components/Image';
import Button from '../../components/Button';

const Banner = props => {
  const { heading, paragraph, cta, image } = props.content;
  return (
    <Container>
      <div className="Banner--content">
        <Heading
          element={heading.options.element}
          variant="SectionHeading"
          className="Banner--SectionHeading"
        >
          {heading.text}
        </Heading>
        <Paragraph className="Banner--SectionSubHeading">
          {paragraph.text}
        </Paragraph>
        {cta.url && <Button href={cta.url}>{cta.label}</Button>}
      </div>
      <div className="Banner--image">
        <Image src={MockUp} alt={image.alt} />
      </div>
    </Container>
  );
};

export default Banner;
