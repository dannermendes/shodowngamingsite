import { styled } from '@material-ui/core';
import React from 'react';

const LogoDiamond = styled('div')({
  position: 'relative',
  backgroundColor: 'red',
  width: '160px',
  height: '160px',
  transform: 'rotate(45deg)',
  left: '-50%',
  top: '120px'
});

const LogoContainer = styled('div')({
  position: 'absolute',
  left: '50%'
})

const Logo = () => (
  <LogoContainer>
    <LogoDiamond></LogoDiamond>
  </LogoContainer>
);

export default Logo;