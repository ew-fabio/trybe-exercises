import PropTypes from "prop-types";
import React, { Component } from "react";

const verifyEmail = (email) => {
	const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
	return emailRegex.test(email);
};

export default class ValidEmail extends Component {
	render() {
		const { email } = this.props;

		return (
			<div>
				{email && <h2 data-testid="user-email">{`Email: ${email}`}</h2>}
				{/* {verifyEmail(email) ? (
					<h3 style={{ color: "blue" }}>Email Válido</h3>
				) : (
					<h3 style={{ color: "red" }}>Email Inválido</h3>
				)} */}

				{
					<h3 className={verifyEmail(email) ? "text-blue" : "text-red"}>
						{verifyEmail(email) ? "Email Válido" : "Email Inválido"}
					</h3>
				}

				{/* {verifyEmail(email) ? (
					<h3 className="text-blue">Email Válido</h3>
				) : (
					<h3 className="text-red">Email Inválido</h3>
				)} */}
			</div>
		);
	}
}
ValidEmail.propTypes = {
	email: PropTypes.string,
};
