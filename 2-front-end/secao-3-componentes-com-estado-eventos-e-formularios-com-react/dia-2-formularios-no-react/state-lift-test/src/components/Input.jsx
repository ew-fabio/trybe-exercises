import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Input extends Component {

  handleTextChange = ({ target: { value } }) => {
    this.props.functionTC(value)
  }

  render() {
    const { text } = this.props
    return (
        <input
          type="text"
          autoFocus
          placeholder="digite seu texto aqui"
          value={text}
          onChange={this.handleTextChange}
        />
    )
  }
}

Input.propTypes = {
  functionTC: PropTypes.func,
  text: PropTypes.string.isRequired
}
