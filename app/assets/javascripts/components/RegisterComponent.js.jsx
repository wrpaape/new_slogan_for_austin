var Register = React.createClass({
    render: function () {
        return (
          <div>     
            <NavComponent/>
            <MainTitle/>
            <h1> Register </h1>
            <form onSubmit={this.addNewUser} ref="registerform" className="cosmo">
              <input ref="registername"/>
              <input ref="registerpassword"/>
              <button ref="registerbutton" type="submit">
                Submit
              </button>
            </form> 
          </div>
        );
    },
    addNewUser: function(e){
            e.preventDefault;
            console.log(React.findDOMNode(this.refs.registername).value);
            var Reggie={name: React.findDOMNode(this.refs.registername).value,
              password: React.findDOMNode(this.refs.registerpassword).value,
              password_confirmation: React.findDOMNode(this.refs.registerpassword).value};

              

            
            $.post('/users',
                   Reggie ,
                   function(response){
                      console.log(response);
                      if(response.response == "user successfully created"){
                        userlist.add(Reggie);
                        app.navigate('home', {trigger: true});
                      }
                      else {$('.cosmo').append('<h2>user name already in use</h2>');}
                   },
                   'json'
                   );

    }
});
// addNewUser: function(e){
//           e.preventDefault;
//           console.log(e);
//           var loginObject = {};
//           loginObject.name = React.findDOMNode(this.refs.loginname).value;
//           loginObject.password = React.findDOMNode(this.refs.loginpassword).value;
          
//           $.post(
//             '/login',
//             loginObject,
//             'json'
//           )
//           .success(function(result) {
//               console.log(result);
//               app.navigate('home', {trigger: true});
//           })
//           .error(function(error) {
//             console.log(error);
//             $('.porkbelly').append('<h1>your password or name is incorrect or you need to register</h1>');
//           })

//         }
    


