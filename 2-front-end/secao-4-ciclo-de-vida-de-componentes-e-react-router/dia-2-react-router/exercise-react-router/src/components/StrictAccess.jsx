import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class StrictAccess extends Component {
  render() {
    const { user: { user, password } } = this.props
    // console.log(user, password);

    if (!(user==='joao' && password === '1234')){
      alert('Access denied');
      return <Redirect to="/" />
    }

    return (
      <p>
        { `Welcome, ${user}` }
      </p>
    )
  }
}
