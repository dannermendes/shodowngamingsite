import React from 'react';
import { styled } from '@material-ui/core/styles';

import NavBar from '../NavBar';
import Logo from '../Logo';

const HeadContainer = styled('div')({
  height: '300px',
})
const AnimatedSection = styled('div')({
  height: '200px',
  backgroundColor: 'black',
})
const Header = () => (
  <HeadContainer>
    <Logo />
    <AnimatedSection />
    <NavBar />
  </HeadContainer>
);

export default Header;