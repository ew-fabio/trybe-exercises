import React, { Component } from 'react'
import Cards from 'react-credit-cards-2'

export default class RegisteredCards extends Component {
  render() {
    const { registeredCards } = this.props
    return (
      <>
      <h3>Registered Cards</h3>
      <div className="rendered-cards">
      { registeredCards.map(({ cvc, expiry, focus, name, number }) => (
        <li>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </li>
      ))}
      </div>
      </>
    )
  }
}
