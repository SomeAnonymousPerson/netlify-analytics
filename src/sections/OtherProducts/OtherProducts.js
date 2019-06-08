import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Container from '../../components/Container';
import './OtherProducts.css';

const OtherProducts = props => {
  const { heading, products, subheading } = props.content;

  const OtherProductsList = () => {
    return <List className="OtherProductsList">{OtherProductsListItem}</List>;
  };

  const OtherProductsListItem = products.map((product, index) => {
    const { heading, paragraph, productHandle } = product;

    const className = `OtherProductsListItem OtherProductsListItem--${productHandle}`;

    return (
      <ListItem key={index} className={className}>
        <Heading
          element={heading.options.element}
          className="OtherProductsListItem--Heading"
        >
          {heading.text}
        </Heading>
        <Paragraph>{paragraph.text}</Paragraph>
      </ListItem>
    );
  });

  return (
    <Container>
      <Heading
        element={heading.options.element}
        className="OtherProducts--SectionHeading"
      >
        {heading.text}
      </Heading>
      <Paragraph
        element={subheading.options.element}
        className="OtherProducts--SectionSubHeading"
      >
        {subheading.text}
      </Paragraph>
      <OtherProductsList />
    </Container>
  );
};

export default OtherProducts;
