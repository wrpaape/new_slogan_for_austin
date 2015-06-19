

var UserModel = React.createClass({
	render: function(){
		return(

			<form className="loginform" onSubmit={this.commentSubmitted}>
				<label>Login Form</label>
				<div ref="error" className="error"></div>
				<div ref="success" className="success"></div>
				<input ref="loginInput" type="text" placeholder="Email address"/>
				<input ref="loginPass" type="password" placeholder="Password"/>
				<button>Submit</button>
			</form>

		);
	},
	// commentSubmitted: function(e){
	// 	e.preventDefault();

	// 	var login = new usermodel({
	// 		user: this.refs.loginInput.getDOMNode().value,
	// 		password: this.refs.loginPass.getDOMNode().value
	// 	});

	// 	if(!login.isValid()){
	// 		console.log(login.validationError);
	// 		this.refs.success.getDOMNode().innerHTML = '';
	// 		this.refs.error.getDOMNode().innerHTML = login.validationError;
		
	// 	}else{
	// 		this.refs.error.getDOMNode().innerHTML = '';
	// 	 	this.refs.success.getDOMNode().innerHTML = 'Success!';
		
	// 	}
	}

});