import React from 'react';
import './Header.css';
import menuImage from './header-menu.png';
import signupImage from './header-signup.png';

import Container from '../../components/Container';
import Image from '../../components/Image';

const Header = () => {
  return (
    <header className="Header">
      <Container className="Header--Container">
        <Image src={menuImage} className="Header--MenuDesktop" />
        <Image src={signupImage} className="Header--Signup" />
      </Container>
    </header>
  );
};

export default Header;
