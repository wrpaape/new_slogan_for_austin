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
        
       $('#register-form').on('submit', addNewUser);


       	function addNewUser(e){
       		e.preventDefault;
       		Reggie = new UserModel({

       			name: $('#register-name').val(),
       			password: $('register-password').val()

       		});
       		$.post('http://localhost:3000/users',Reggie,function(response){
       			if(response = "user successfully created"){
       				UserCollection.add(Reggie);
       				app.navigate('home', {trigger: true});
       			}
       			else {
       				$('#register-form').append('user name already in use');
       			}
       		});	
       	}
       		
    }
});