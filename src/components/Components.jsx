import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex
} from 'rebass';

/**
 * Defines a component for a simple flexbox backdrop with content centered along both axes.
 */
export const Backdrop = (props) => (
  <Flex
    {...props}
    sx={{
      backgroundImage: `url(${props.bgImg})`,
      backgroundSize: 'cover',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: ['60vh', '70vh', '75vh'],
      textAlign: 'center'
    }}
  />
);

Backdrop.propTypes = {
  bgImg: PropTypes.string.isRequired
};
