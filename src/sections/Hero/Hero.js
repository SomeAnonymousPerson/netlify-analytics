import React from 'react';
import './Hero.css';

import heroImage from './netlify-analytics.svg';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Container from '../../components/Container';
import Image from '../../components/Image';

const Hero = props => {
  const { heading, paragraph } = props.content;
  return (
    <Container>
      <Heading element={heading.options.element}>{heading.text}</Heading>
      <Paragraph
        variant="SectionSubHeading"
        className="Hero--SectionSubHeading"
      >
        {paragraph.text}
      </Paragraph>
      <Image src={heroImage} alt="" />
    </Container>
  );
};

export default Hero;
