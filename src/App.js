/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import Theme from './theme';
import NavBar from './components/NavBar';
import logo from './img/cww_logo.png';
import HomePage from './pages/HomePage';

const navLinks = [
  {
    label: 'Projects',
    href: '/#projects'
  },
  {
    label: 'About',
    href: '/#about'
  },
  {
    label: 'Contact',
    href: '/#contact'
  }
];

const App = () => (
  <Theme>
    <NavBar homeImg={logo} links={navLinks} />
    <Route exact path="/" component={HomePage} />
  </Theme>
);

export default App;

