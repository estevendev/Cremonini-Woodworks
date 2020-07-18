import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Box,
  Image,
  Link
} from 'rebass';
import { BsGearFill } from 'react-icons/bs';
import SignInModal from './SignInModal';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignInModal: false
    };
  }

  render() {
    return (
      <Flex
        sx={{
          flexDirection: ['column', 'row', 'row'],
          justifyContent: 'space-between',
          width: '100vw'
        }}
      >
        <a href="/">
          <Image variant="navLogo" src={this.props.homeImg} />
        </a>
        <SignInModal
          show={this.state.showSignInModal}
          onHide={() => this.setState({ showSignInModal: false })}
        />
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            alignItems: ['center', 'flex-start'],
            mt: [-20, 20],
            mr: [0, 20]
          }}
        >
          {
            this.props.links.map((link) => <Link variant="navLink" href={link.href}>{link.label}</Link>)
          }
          <BsGearFill
            style={{ color: '#fff', paddingTop: 3 }}
            onClick={() => this.setState({ showSignInModal: !this.state.showSignInModal })}
          />
        </Flex>
      </Flex>
    );
  }
}

NavBar.propTypes = {
  homeImg: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

NavBar.defaultProps = {
  links: []
};
