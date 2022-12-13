import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      tecnologiaFavorita: '',
      escola: '',
      fullName: '',
      email: '',
      textArea: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.fileInput = React.createRef();
  }

  handleChange ({target: { name, value }}) {
    console.log(value);
    this.setState(({
      [name]: value,
    }))
  }

  render() {
    const { tecnologiaFavorita } = this.state
    return (
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
          <div>
            <label
              htmlFor="tecnologiaFavorita">
                Qual a sua tecnologia favorita?
            </label>
            <select
              name="tecnologiaFavorita"
              value={tecnologiaFavorita}
              onChange={this.handleChange}>
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
          </div>

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
                onChange={ this.handleChange }
              >
              </textarea>
            </div>
          </div>
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
    )
  }
}
