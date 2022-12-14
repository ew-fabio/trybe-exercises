import React, { Component } from 'react'
import Select from './Select';
import TextArea from './TextArea';

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      tecnologiaFavorita: '',
      escola: '',
      fullName: '',
      email: '',
      textArea: '',
      errorForm: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.fileInput = React.createRef();
  }

  handleError() {
    const { tecnologiaFavorita, escola, fullName, email, textArea } = this.state

    const errorCases = [
      !tecnologiaFavorita,
      !escola,
      !fullName.length,
      !email.match(/^\S+@\S+$/i),
      !textArea.length
    ]

    const formularioPreenchido = errorCases.every((error) => error !== true)

    this.setState({
      errorForm: !formularioPreenchido
    })
  }


  handleChange ({target: { name, value }}) {
    console.log(value);
    this.setState(({
      [name]: value,
    }), this.handleError)
  }

  render() {
    const { tecnologiaFavorita, textArea, errorForm } = this.state
    return (
      <>
        <form>

          <h1>Exercício de Formulários - REACT</h1>
          <fieldset>
            <legend>Dados do usuário:</legend>
            <div>
              <label htmlFor="fullName">Nome Completo:</label>
              <input type="text" name="fullName" onChange={ this.handleChange } />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" onChange={ this.handleChange } />
            </div>
          </fieldset>

          <fieldset>
            <legend>Tecnologia favorita:</legend>
            <Select handleChange={this.handleChange} value={tecnologiaFavorita} />

            <TextArea handleChange={this.handleChange} value={textArea} />

          </fieldset>

          <fieldset>
            <legend>Escola:</legend>
            <div>
              <label htmlFor="escola">É tryber?
                <input type="radio" name="escola" id="escola" value={true} onChange={ this.handleChange } /> Sim
                <input type="radio" name="escola" id="escola" value={false} onChange={ this.handleChange } /> Não
              </label>
            </div>

            <label>
            Carregue seu portfolio:
            <input type="file" ref={this.fileInput} />
          </label>
          </fieldset>

        { JSON.stringify(this.state) } {/* serve para verificar a atualização do state */}
        </form>
        { errorForm
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </>
    )
  }
}
