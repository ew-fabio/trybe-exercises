import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    const { handleChange, value } = this.props

    let error = ''
    if(value.length > 100) error = 'Ultrapassou o número de caracteres...'

    return (
      <div>
        <label
          htmlFor="textArea">
            Poderia nos contar o motivo da sua escolha?
        </label>
        <div>
          <textarea
            name="textArea"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={value}
          >
          </textarea>
        </div>

        <span>{ error && error }</span>
      </div>
    )
  }
}

TextArea.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
}
