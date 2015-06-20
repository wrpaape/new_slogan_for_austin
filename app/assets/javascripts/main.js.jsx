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
        var slogans = new SloganCollection();
        slogans.fetch({success: function(){
            React.render(<ListingComponent slogans={slogans}/>, document.querySelector("#container"));
        }})
    },
    userpage:function(user){
        React.render(<Profile/>, document.querySelector('#container'));
        var user = new UserModel();
        users.fetch({success: function() {
            React.render(<userhistorycomponent user={user}/>, document.querySelector("#container"));
        }})
    },

});


var app = new App();
Backbone.history.start();
app.navigate('home');
var keith = new UserModel({

        name: "keithistheman",
        email: "keith@keith.com",
        password:"opensesame"

});

var keithlist = new UserCollection();
keith.save();
keithlist.add(keith);
keithlist.fetch();
// $('#container').html(keithlist);
