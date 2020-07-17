import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Box,
  Image, Link
} from 'rebass';

const NavBar = (props) => (
  <Flex
    sx={{
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100vw'
    }}
  >
    <a href="/">
      <Image variant="navLogo" src={props.homeImg} />
    </a>
    <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        pt: 20,
        pr: 10
      }}
    >
      {
        props.links.map((link) => <Link variant="navLink" href={link.href}>{link.label}</Link>)
      }
    </Flex>
  </Flex>
);

NavBar.propTypes = {
  homeImg: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

NavBar.defaultProps = {
  links: []
};

export default NavBar;