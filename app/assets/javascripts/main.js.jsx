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
app.navigate('edit');
var keith = new UserModel({
        id: '',
        name: "keithistheman",
        email: "keith@keith.com",
        password:"opensesame",
        slogans_count: null,
        comments_count: null,
        rating: null,
        rating_slogan: null,
        rating_comment: null,
        created_at: null,
        updated_at:null,
});

var keithlist = new UserCollection();
keith.save();
keithlist.add(keith);
keithlist.fetch();
$('#container').html(keithlist);
