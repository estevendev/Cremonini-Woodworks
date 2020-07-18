import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Heading,
  Button
} from 'rebass';
import {
  Label,
  Input
} from '@rebass/forms';
import ReactLoading from 'react-loading';
import AdminAuth from '../database/AdminAuth';
import { Modal } from './Components';
import { showSuccess, showError } from './Alert';

export default class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      success: false,
      error: false
    };
  }

  signIn = async () => {
    this.setState({ isLoading: true });
    const { email, password } = this.state;
    try {
      await AdminAuth.signIn(email, password);
      showSuccess('Successfully signed in.');
      this.props.onHide();
    } catch ({ message }) {
      showError(message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Heading variant="modalHeading">Admin Sign In</Heading>
        <Box mx={10} my={10}>
          <hr />
          <Label sx={{ fontFamily: 'button' }}>Email</Label>
          <Input
            type="email"
            placeholder="admin@email.com"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Label mt={10} sx={{ fontFamily: 'button' }}>Password</Label>
          <Input
            mb={10}
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Flex
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}
          >
            <Button mr={1} variant="form" onClick={this.signIn}>
              {
                this.state.isLoading
                  ? <ReactLoading type="spokes" height={16} width={16} />
                  : 'Sign In'
              }
            </Button>
            <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
          </Flex>
        </Box>
      </Modal>
    );
  }
};

SignInModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};
