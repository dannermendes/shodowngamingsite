import React from 'react';
import { HashRouter as MainRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import History from '../../view/History';
import News from '../../view/News';
import Cast from '../../view/Cast';

const Router = () => (
  <MainRouter>      
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/news' />
        </Route>
        <Route path='/history' >
          <History />
        </Route>
        <Route path='/news'>
          <News />
        </Route>
        <Route path="/cast" >
          <Cast />
        </Route>
      </Switch>
    </Layout>
  </MainRouter  >
);

export default Router;