import PropTypes from "prop-types"
import React, { Component } from 'react'

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

export default class ValidEmail extends Component {
  render() {

    const { email } = this.props;

    return (
      <div>
        <h2 data-testid="user-email">{`Email: ${email}`}</h2>
        <h3>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
      </div>
    );
  }
}
ValidEmail.propTypes = {
  email: PropTypes.string,
}
