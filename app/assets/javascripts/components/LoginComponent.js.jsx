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
           		<button type="submit">
           			Submit
           		</button>
           	</form>
           
     
          </div>
        );
    }
});