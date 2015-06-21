var Login = React.createClass({
    render: function () {
        return (
          <div>
            	<NavComponent/>
            	<MainTitle/>
             	<h1> Login </h1>
            <form id="login-form">
             		<input id="login-name"/>
             		<input id="login-password"/>
             		<button type="submit">Submit</button>
           	</form>
          </div>
        );

  $('#login-form').on('submit', loginToServer);


       	function loginToServer(e){
       		e.preventDefault;
       		var loginObject = {};
        	loginObject.name = $('#login-name').val();
        	loginObject.password = $('#login-password').val();
        	$.post('http://localhost:3000/login',loginObject,function(response){
        	 	if(response==="successfully logged in"){app.navigate('home', {trigger: true});}
        	 	else{$('login-form').append("your name or password is wrong, or you need to register");}
        	});

       	}
    }
});