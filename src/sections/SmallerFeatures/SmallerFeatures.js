import React from 'react';
import './SmallerFeatures.css';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Container from '../../components/Container';
import Icon from '../../components/Icon';

const SmallerFeatures = props => {
  const { content } = props;

  const SmallerFeaturesList = () => {
    return (
      <List className="SmallerFeaturesList">{SmallerFeaturesListItem}</List>
    );
  };

  // SmallerFeatures content model accepts an array
  const SmallerFeaturesListItem = content.features.map(
    (smallerFeature, index) => {
      const { heading, paragraph, icon } = smallerFeature;
      return (
        <ListItem key={index} className="SmallerFeaturesListItem">
          <Icon icon={icon} className="SmallerFeatures--Icon" />
          <Heading element={heading.options.element}>{heading.text}</Heading>
          <Paragraph>{paragraph.text}</Paragraph>
        </ListItem>
      );
    }
  );

  return (
    <Container>
      <Heading
        element={content.heading.options.element}
        variant="SectionHeading"
        className="SmallerFeatures--SectionHeading"
      >
        {content.heading.text}
      </Heading>
      <SmallerFeaturesList />
    </Container>
  );
};

export default SmallerFeatures;
