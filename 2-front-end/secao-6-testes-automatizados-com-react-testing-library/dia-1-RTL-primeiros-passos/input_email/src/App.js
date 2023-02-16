import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		email: '',
		saveEmail: '',
	};

	changeEmail = ({ target: { value } }) => {
		this.setState({
			email: value,
		});
	}

	changeSaveEmail = (param) => {
		this.setState({
			saveEmail: param,
			email: '',
		});
	}

	render() {
		const { email, saveEmail } = this.state;

		return (
			<div className="App">
				<label htmlFor="id-email">
					Email
					<input
						type="email"
						id="id-email"
            value={ email }
						onChange={ this.changeEmail }
					/>
				</label>

				<input
					type="button"
					id="btn-send"
					data-testid="btn-send"
					value="Enviar"
					onClick={() => this.changeSaveEmail(email)}
				/>

				<input type="button" id="btn-back" value="Voltar" />

				<h2 data-testid="user-email">{`Email: ${saveEmail}`}</h2>
			</div>
		);
	}
}

export default App;
