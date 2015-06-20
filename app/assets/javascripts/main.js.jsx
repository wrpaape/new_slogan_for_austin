/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home',
        'sloganpage/:slogan': 'sloganpage',
        'userpage/:user': 'user',
        'register':'register',
        'login':'login'
    },
    home: function() {
      React.render(<HomePage/>, document.querySelector('#container'));
    },
    sloganpage: function(slogan) {
      React.render(<SloganPage/>, document.querySelector('#container'));
    },
    userpage:function(user){
        React.render(<UserPage/>, document.querySelector('#container'));
    },
    register:function(){
        React.render(<Register/>, document.querySelector('#container'));
    },
    login:function(){
        React.render(<Login/>, document.querySelector('#container'));
    }

});

var app = new App();
Backbone.history.start();
app.navigate('home');
var keith = new UserModel({

        name: "reidistheman",
        email: "reid@reid.com",
        password:"billythekid",
        password_confirmation:"billythekid"
});
console.log(keith);
var keithlist = new UserCollection();
keith.save();
keithlist.add(keith);
keithlist.fetch();
console.log(keithlist);
// $('#container').html(keithlist);

var log = new LoggedInModel();
var loglist = new LoggedInCollection;
log.save();
loglist.add(log);
loglist.fetch();
console.log(loglist);