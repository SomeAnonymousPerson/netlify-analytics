import React from 'react';
import './Header.css';
import menuImage from './header-menu.png';
import logoMobile from './header-mobile.png';
import signupImage from './header-signup.png';
import menuMobile from './header-menu-mobile.png';

import Container from '../../components/Container';
import Image from '../../components/Image';

const Header = () => {
  return (
    <header className="Header">
      <Container className="Header--Container">
        <Image src={menuImage} alt="" className="Header--MenuDesktop" />
        <Image src={logoMobile} alt="" className="Header--LogoMobile" />
        <Image src={signupImage} alt="" className="Header--Signup" />
        <Image src={menuMobile} alt="" className="Header--MenuMobile" />
      </Container>
    </header>
  );
};

export default Header;
