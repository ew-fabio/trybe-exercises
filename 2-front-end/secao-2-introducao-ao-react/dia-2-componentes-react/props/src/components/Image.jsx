import PropTypes from "prop-types"
import React from 'react';

export default class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

Image.propTypes = {
  alternativeText: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
}

//
