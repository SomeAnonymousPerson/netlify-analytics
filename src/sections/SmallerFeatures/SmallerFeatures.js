import React from 'react';
import './SmallerFeatures.css';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Container from '../../components/Container';

const SmallerFeatures = props => {
  const { content } = props;

  const SmallerFeaturesList = () => {
    return (
      <List className="SmallerFeaturesList">{SmallerFeaturesListItem}</List>
    );
  };

  // SmallerFeatures content model accepts an array
  const SmallerFeaturesListItem = content.map((smallerFeature, index) => {
    const { heading, paragraph, image } = smallerFeature;
    return (
      <ListItem key={index} className="SmallerFeaturesListItem">
        <Image src={image.src} alt={image.alt} />
        <Heading element={heading.options.element}>{heading.text}</Heading>
        <Paragraph>{paragraph.text}</Paragraph>
      </ListItem>
    );
  });

  return (
    <Container>
      <SmallerFeaturesList />
    </Container>
  );
};

export default SmallerFeatures;
