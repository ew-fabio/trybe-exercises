import React, { Component } from 'react'
import glass from '../assets/copo.png'

export default class JuiceCard extends Component {
  render() {
    const { juice: { suco, hex } } = this.props

    return (
      <li>
        <img
          style={{ backgroundColor: hex }}
          src={glass}
          alt={`Imagem do suco de ${suco}`}
        />
        <p>{`O nome do suco é ${suco}`}</p>
      </li>
    )
  }
}
