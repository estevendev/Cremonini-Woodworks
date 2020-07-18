/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import Theme from './theme';
import HomePage from './pages/HomePage';

const App = () => (
  <Theme>
    <Route exact path="/" component={HomePage} />
  </Theme>
);

export default App;

