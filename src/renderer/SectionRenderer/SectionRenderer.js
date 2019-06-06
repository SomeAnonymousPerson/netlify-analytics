import React from 'react';

import Hero from '../../sections/Hero';
import MainFeatures from '../../sections/MainFeatures';
import Banner from '../../sections/Banner';
import SmallerFeatures from '../../sections/SmallerFeatures';
import OtherProducts from '../../sections/OtherProducts';

const SectionsList = {
  Hero: Hero,
  MainFeatures: MainFeatures,
  Banner: Banner,
  SmallerFeatures: SmallerFeatures,
  OtherProducts: OtherProducts
};

const SectionRenderer = props => {
  const { component, content } = props;
  const ReactComponent = SectionsList[component];

  return (
    <section className={component}>
      <ReactComponent content={content} />
    </section>
  );
};

export default SectionRenderer;
