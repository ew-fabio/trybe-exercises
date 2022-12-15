import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Output extends Component {
  render() {
    const { outText } = this.props
    return (
        <h3>
          OUTPUT: <span>{outText}</span>
        </h3>
    )
  }
}

Output.propTypes = {
  outText: PropTypes.string
}
