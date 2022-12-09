import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class GenButton extends Component {
  render() {
    const { pokeType } = this.props;
    return (
      <button
        type="button"
      >
        {pokeType}
      </button>
    );
  }
}

GenButton.propTypes = {
  pokeType: PropTypes.string.isRequired,
};
