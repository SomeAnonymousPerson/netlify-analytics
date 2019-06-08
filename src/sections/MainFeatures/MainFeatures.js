import React from 'react';
import './MainFeatures.css';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Container from '../../components/Container';

const MainFeatures = props => {
  const { content } = props;

  const MainFeaturesList = () => {
    return <List>{MainFeaturesListItem}</List>;
  };

  // MainFeatures content model accepts an array of features
  const MainFeaturesListItem = content.features.map((mainFeature, index) => {
    const { heading, paragraph, image } = mainFeature;

    const imageUrl = `uploads/${image.src}`;

    return (
      <ListItem key={index} className="MainFeaturesListItem">
        <div className="MainFeaturesListItem--content">
          <Heading element={heading.options.element}>{heading.text}</Heading>
          <Paragraph>{paragraph.text}</Paragraph>
        </div>
        <Image src={imageUrl} alt={image.alt} />
      </ListItem>
    );
  });

  return (
    <Container size="Narrow">
      <Heading
        element={content.heading.options.element}
        className="MainFeatures--SectionHeading"
      >
        {content.heading.text}
      </Heading>
      <MainFeaturesList />
    </Container>
  );
};

export default MainFeatures;
