import PropTypes from "prop-types"
import React, { Component } from 'react'
import Image from './Image';

export default class UserProfile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <p>{ user.name }</p>
        <p>{ user.email }</p>
        <Image source={ user.avatar } alternativeText="user avatar" />
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
}
