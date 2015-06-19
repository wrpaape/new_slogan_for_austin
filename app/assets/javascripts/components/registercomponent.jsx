var React = require("react");
var LoginModel = require("../models/UserModel.js");

module.exports = React.createClass({
	render: function(){
		return(

			<form className="registerForm" onSubmit={this.commentSubmitted}>
				<label>Register Form</label>
				<div ref="error" className="error"></div>
				<div ref="success" className="success"></div>
				<p>Choose a unique and awesome username and password! </p>
				<input ref="loginInput" type="text" placeholder="IguanaOverlord"/>
				<input ref="loginPass" type="password" placeholder="Password"/>
				<button>Submit</button>
			</form>

		);
	},