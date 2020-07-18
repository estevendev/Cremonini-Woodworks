/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import Theme from './theme';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';

const App = () => (
  <Theme>
    <ToastContainer />
    <Route exact path="/" component={HomePage} />
  </Theme>
);

export default App;

