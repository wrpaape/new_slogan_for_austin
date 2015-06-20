var UserModel = React.createClass({
	render: function(){
		return(

			<form className="loginform" onSubmit={this.loginSubmitted}>
				<label>Login Form</label>
				<div ref="error" className="error"></div>
				<div ref="success" className="success"></div>
				<input ref="loginInput" type="text" placeholder="Email address"/>
				<input ref="loginPass" type="password" placeholder="Password"/>
				<button>Submit</button>
			</form>

		);
	},


	//login function

    $('#loginform').on('submit', loginToServer);


        function loginToServer(){
            var loginObject = {};
           		loginObject.name = $('#login-name').val();
           		loginObject.password = $('#login-password').val();
           $.post('http://localhost:3000/login',loginObject,function(response){
                if(response==="successfully logged in")
                	{navigate home};
                else{
                	$('login-form').append("your name or password is wrong, or you need to register");}
           });

          }
   }
});




