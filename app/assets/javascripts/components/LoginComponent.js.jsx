var Login = React.createClass({
    render: function () {
        return (
          <div>
            
          	
          	<NavComponent/>
          	<MainTitle/>
           	<h1> Login </h1>
           	<form className="porkbelly" onSubmit={this.loginToServer} ref="loginform">
           		<input ref="loginname"/>
           		<input ref="loginpassword"/>
           		<button   ref="login-button" type="submit">
           			Submit
           		</button>
           	</form>
           
     
          </div>
        );

        },


       	loginToServer: function(e){
       		e.preventDefault;
          console.log(e);
       		var loginObject = {};
        	loginObject.name = React.findDOMNode(this.refs.loginname).value;
        	loginObject.password = React.findDOMNode(this.refs.loginpassword).value;
        	// $.post('http://localhost:3000/login',loginObject,function(response){
         //    console.log(response);
        	//  	if(response=="successfully logged in"){app.navigate('home', {trigger: true});}
        	//  	else{React.findDOMNode(this.refs.loginform).append("your name or password is wrong, or you need to register");}
        	// });
          $.post(
            '/login',
            loginObject,
            'html'
          )
          .success(function(result) {
              console.log(result);
              app.navigate('home', {trigger: true});
          })
          .error(function(error) {
            console.log(error);
            $('.porkbelly').append('your password or name is incorrect or you need to register');
          })

       	}
    
});

