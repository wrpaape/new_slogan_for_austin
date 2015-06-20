var Register = React.createClass({
    render: function () {
        return (
          <div>
          	<NavComponent/>
          	<MainTitle/>
           	<h1> Register </h1>
           	<form id="register-form">
           		<input id="register-name"/>
           		<input id="register-password"/>
           		<button type="submit">
           			Submit
           		</button>
           	</form>
           
          </div>
        );
    }
});