/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'profile',
        'edit': 'edit'
    },
    profile: function() {
      React.render(<Profile/>, document.querySelector('#container'));
    },
    edit: function() {
      React.render(<Edit/>, document.querySelector('#container'));
<<<<<<< HEAD
    }
=======
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

>>>>>>> 6f872f2... some components built out, main altered
});

var app = new App();
Backbone.history.start();
app.navigate('edit');
