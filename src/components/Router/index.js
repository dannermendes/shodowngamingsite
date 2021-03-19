import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import History from '../../view/History';
import News from '../../view/News';
import Cast from '../../view/Cast';

const Router = () => (
  <BrowserRouter>      
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
  </BrowserRouter>
);

export default Router;