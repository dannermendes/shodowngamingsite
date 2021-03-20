import { Container, styled } from '@material-ui/core';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const ContentContainer = styled(Container)({
  minHeight: 'calc(100vh - 520px)',
})

const Layout = ({children}) => (
  <div>
    <Header />
    <ContentContainer>
      { children }
    </ContentContainer>
    <Footer />
  </div>
);

export default Layout;
