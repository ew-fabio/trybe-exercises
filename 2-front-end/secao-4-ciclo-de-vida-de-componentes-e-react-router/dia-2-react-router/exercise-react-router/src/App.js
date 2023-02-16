import React, { Component } from 'react';
import Links from './pages/Links';
import Routes from './pages/Routes';

class App extends Component {
state = {
  user: 'joao',
  password: '1234'
}

  render() {
    return (
      <>
        <Links />
        <Routes {...this.state } />
      </>
    );
  }
}

export default App;
