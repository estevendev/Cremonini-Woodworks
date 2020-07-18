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
      justifyContent: 'space-between',
      alignItems: 'center',
      height: ['70vh', '75vh'],
      textAlign: 'center'
    }}
  />
);

Backdrop.propTypes = {
  bgImg: PropTypes.string.isRequired
};

export const Modal = (props) => (
  <div>
    {
      props.show
        ? (
          <Flex
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100vh',
              width: '100vw',
              justifyContent: 'center',
              alignItems: 'center',
              bg: 'rgb(0,0,0,0.6)'
            }}
          >
            <Box
              sx={{
                bg: '#fff',
                minHeight: 200,
                minWidth: 350,
                borderRadius: 4,
                boxShadow: '3px 3px 10px #000'
              }}
            >
              {props.children}
            </Box>
          </Flex>
        ) : null
    }
  </div>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};
