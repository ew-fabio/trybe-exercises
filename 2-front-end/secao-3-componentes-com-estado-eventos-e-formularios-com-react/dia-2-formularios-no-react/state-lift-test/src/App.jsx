import './App.css';
import React, { Component } from 'react'
import Title from './components/Title';
import Input from './components/Input';
import Output from './components/Output';

export default class App extends Component {

  state = {
    text: '',
    error: true
  }

  handleError = () => {
    const { text } = this.state
    const verification = !text.length
    this.setState({
      error: verification
    })
  }

  handleTextChange = (param) => {
    this.setState({
      text: param
    }, this.handleError)
  }

  render() {
    const { text, error } = this.state
    return (
      <section className="App">
        <Title />

        <Input
          functionTC={this.handleTextChange}
          value={text}
        />

        <Output outText={text} />

        { error
            ? <span className="empty">Preencha a entrada de texto!</span>
            : (text.length <= 10)
              ? <span className="almost">Texto deve ter ao menos 10 caracteres...</span>
              : <span className="full">Entrada de dados confirmada...</span>
        }
      </section>
    )
  }
}
