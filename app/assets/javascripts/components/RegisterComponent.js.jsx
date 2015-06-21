var Register = React.createClass({
    render: function () {
        return (
          <div>     
            <NavComponent/>
            <MainTitle/>
            <h1> Register </h1>
            <form ref="register-form">
              <input ref="register-name"/>
              <input ref="register-password"/>
              <button onClick={this.addNewUser} ref="login-button" type="submit">
                Submit
              </button>
            </form> 
          </div>
        );
    },
    addNewUser: function(e){
            e.preventDefault;
            Reggie = new UserModel({

              name: $("input[ref='register-name']" ).val(),
              password: $("input[ref='register-password']" ).val()

            });
            $.post('http://localhost:3000/users', Reggie ,function(response){
                if(response == "user successfully created"){
                  UserCollection.add(Reggie);
                  app.navigate('home', {trigger: true});
                }
                else {$("input[ref='register-form']").append('user name already in use');}
            });

    }
});



