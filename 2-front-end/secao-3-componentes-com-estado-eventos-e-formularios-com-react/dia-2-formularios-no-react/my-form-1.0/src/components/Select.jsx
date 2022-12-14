import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Select extends Component {

  render() {
    const { handleChange, value } = this.props

    let error = ''
    if(value === 'none') error = 'Selecione uma tecnologia...'

    return (
      <div>
      <label
        htmlFor="tecnologiaFavorita">
          Qual a sua tecnologia favorita?
      </label>
      <select
        name="tecnologiaFavorita"
        value={value}
        onChange={handleChange}>
          <option value="none">
            Selecione...
          </option>

          <option value="javascript">
            Javascript
          </option>

          <option value="react">
            React
          </option>

          <option value="python">
            Python
          </option>

          <option value="java">
            Java
          </option>

          <option value="html-css">
            HTML/CSS
          </option>

      </select>

      <span>{ error && error }</span>
    </div>
    )
  }
}

Select.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
}
