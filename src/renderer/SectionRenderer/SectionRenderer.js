import React from 'react';

import Hero from '../../sections/Hero';
import MainFeatures from '../../sections/MainFeatures';
import Banner from '../../sections/Banner';
import SmallerFeatures from '../../sections/SmallerFeatures';
import OtherProducts from '../../sections/OtherProducts';
import CallOut from '../../sections/CallOut';

const SectionsList = {
  Hero: Hero,
  MainFeatures: MainFeatures,
  Banner: Banner,
  SmallerFeatures: SmallerFeatures,
  OtherProducts: OtherProducts,
  CallOut: CallOut
};

const SectionRenderer = props => {
  const { component, content } = props;
  const Section = SectionsList[component];

  return (
    <section className={component}>
      <Section content={content} />
    </section>
  );
};

export default SectionRenderer;
