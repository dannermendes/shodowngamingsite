import React from 'react';
import { styled } from '@material-ui/core';
import MenuItem from '../MenuItem';


const NavBarContainer = styled('div')({
  height: '40px',
  background: 'linear-gradient(180deg, rgba(208,208,219,1) 33%, rgba(171,170,194,1) 72%)', 
});

const NavBlock = styled('div')({
  display: 'inline-block',
  height: '100%',
  width: '50%'
});

const NavBlockContainer = styled('div')({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const NavBar = () => (
  <NavBarContainer>
    <NavBlock>
      <NavBlockContainer>
        <MenuItem to="/history">History</MenuItem>
        <MenuItem to="/news">News</MenuItem>
        <MenuItem to="/cast">Cast</MenuItem>
      </NavBlockContainer>
    </NavBlock>
    <NavBlock>
    <NavBlockContainer>
        <MenuItem to="/">Patrocínio</MenuItem>
        <MenuItem to="/">Merch</MenuItem>
        <MenuItem to="/">Conta</MenuItem>
      </NavBlockContainer>
    </NavBlock>
  </NavBarContainer>
);

export default NavBar;