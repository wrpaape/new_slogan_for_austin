var Login = React.createClass({
    render: function () {
        return (
          <div>
            
          	
          	<NavComponent/>
          	<MainTitle/>
           	<h1> Login </h1>
           	<form ref="login-form">
           		<input ref="login-name"/>
           		<input ref="login-password"/>
           		<button onClick={this.loginToServer} ref="login-button" type="submit">
           			Submit
           		</button>
           	</form>
           
     
          </div>
        );

        },


       	loginToServer: function(e){
       		e.preventDefault;
       		var loginObject = {};
        	loginObject.name = $("input[ref='login-name']" ).val();
        	loginObject.password = $("input[ref='login-password']").val();
        	$.post('http://localhost:3000/login',loginObject,function(response){
        	 	if(response==="successfully logged in"){app.navigate('home', {trigger: true});}
        	 	else{$("form[ref='login-form']").append("your name or password is wrong, or you need to register");}
        	});

       	}
    
});

