import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

const MainFeatures = props => {
  const { content } = props;

  const MainFeaturesList = () => {
    return <List>{MainFeaturesListItem}</List>;
  };

  // MainFeatures content model accepts an array
  const MainFeaturesListItem = content.map((mainFeature, index) => {
    const { heading, paragraph, image } = mainFeature;
    return (
      <ListItem key={index}>
        <div>
          <Heading element={heading.options.element}>{heading.text}</Heading>
          <Paragraph>{paragraph.text}</Paragraph>
        </div>
        <Image src={image.src} alt={image.alt} />
      </ListItem>
    );
  });

  return (
    <section>
      <MainFeaturesList />
    </section>
  );
};

export default MainFeatures;
