import React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Link
} from 'rebass';
import NavBar from './NavBar';
import logo from '../img/cww_logo.png';
import { Backdrop } from './Components';
import frame from '../img/frame.png';

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

export default class MainItem extends React.Component {
  render() {
    return (
      <Backdrop bgImg={frame}>
        <NavBar homeImg={logo} links={navLinks} />
        <Box mt={50} mb={[75, 200]}>
          <Heading variant="heading" pb={30}>Dedicated to Details.</Heading>
          <Link href="/#contact">
            <Button variant="primary">Get in Touch</Button>
          </Link>
        </Box>
      </Backdrop>
    );
  }
}