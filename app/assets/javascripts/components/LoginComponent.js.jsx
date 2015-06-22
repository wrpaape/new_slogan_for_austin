var Login = React.createClass({
    render: function () {
        return (
          <div>
            
          	
          <NavComponent/>
           	<h1> Login </h1>
           	<form className="porkbelly" onSubmit={this.loginToServer} ref="loginform">
           		<input className="sloganinput"ref="loginname"/>
           		<input ref="loginpassword" className="sloganinput"/>
           		<button className="sloganbutton"  ref="login-button" type="submit">
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
        	
          $.post(
            '/login',
            loginObject,
            'json'
          )
          .success(function(result) {
              console.log(result);
              app.navigate('home', {trigger: true});
          })
          .error(function(error) {
            console.log(error);
            $('.porkbelly').append('<h1>your password or name is incorrect or you need to register</h1>');
          })

       	}
    
});

