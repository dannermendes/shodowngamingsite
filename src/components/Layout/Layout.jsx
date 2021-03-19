import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../Header';

const Layout = ({children}) => (
  <di>
    <Header />
    <Container>
      { children }
    </Container>
  </di>
);

export default Layout;
