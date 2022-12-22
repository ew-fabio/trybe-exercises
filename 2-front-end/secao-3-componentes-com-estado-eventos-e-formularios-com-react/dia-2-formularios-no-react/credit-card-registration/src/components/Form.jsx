import React, { Component } from 'react'

export default class Form extends Component {

  render() {
    const {
      handleChange,
      handleInputFocus,
      handleSubmit,
      disabled
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <fieldset className="register-form">
          <legend>Registration Form</legend>
          <label htmlFor="number">
            Card number
            <input
              autoFocus
              type="text"
              name="number"
              id="number"
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </label>

          <label htmlFor="name">
            Card name
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </label>

          <label htmlFor="cvc">
            CVC
            <input
              type="text"
              name="cvc"
              id="cvc"
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </label>

          <label htmlFor="expiry">
            Expiration date
            <input
              type="text"
              name="expiry"
              id="expiry"
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          </label>

          <button
            disabled={disabled}
            type="submit"
          >
            Register
          </button>
        </fieldset>
      </form>
    )
  }
}
