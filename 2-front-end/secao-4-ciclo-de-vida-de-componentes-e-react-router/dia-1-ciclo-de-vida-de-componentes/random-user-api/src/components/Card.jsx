import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { userData } = this.props
    const {
      picture: {large},
      name: {first, last, title},
      email,
      dob: {age},
    } = userData

    return (
      <div>
        <img src={large} alt={`${title} ${first} ${last}`} />
        <h2>{`${title} ${first} ${last}`}</h2>
        <h3>{email}</h3>
        <h3>{age}</h3>
      </div>
    )
  }
}
