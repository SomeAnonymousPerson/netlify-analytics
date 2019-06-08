import React from 'react';
import './Footer.css';
import footerImage from './footer.png';

import Container from '../../components/Container';
import Image from '../../components/Image';

const Footer = () => {
  return (
    <Container>
      <footer className="Footer">
        <Image src={footerImage} alt="" />
      </footer>
    </Container>
  );
};

export default Footer;
