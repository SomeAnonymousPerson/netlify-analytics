import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

const OtherProducts = props => {
  const { heading, products } = props.content;

  const ProductList = () => {
    return <List>{ProductListItem}</List>;
  };

  const ProductListItem = products.map((product, index) => {
    const { heading, paragraph, image } = product;
    return (
      <ListItem key={index}>
        <Image src={image.src} alt={image.alt} />
        <Heading element={heading.options.element}>{heading.text}</Heading>
        <Paragraph>{paragraph.text}</Paragraph>
      </ListItem>
    );
  });

  return (
    <section>
      <Heading element={heading.options.element}>{heading.text}</Heading>
      <ProductList />
    </section>
  );
};

export default OtherProducts;
