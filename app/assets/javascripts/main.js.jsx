/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home',
        'sloganpage/:slogan': 'sloganpage',
        'userpage/:user': 'user'
    },
    home: function() {
      React.render(<Profile/>, document.querySelector('#container'));
    },
    sloganpage: function(slogan) {
      React.render(<Edit/>, document.querySelector('#container'));
    },
    userpage:function(user){
        React.render(<Profile/>, document.querySelector('#container'));
    }

});

var app = new App();
Backbone.history.start();
app.navigate('home');
var keith = new UserModel({

        name: "keithistheman",
        email: "keith@keith.com",
        password:"opensesame"

});
console.log(keith);
var keithlist = new UserCollection();
keith.save();
keithlist.add(keith);
keithlist.fetch();
console.log(keithlist);
// $('#container').html(keithlist);
