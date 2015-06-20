/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home',
        'sloganpage/:slogan': 'sloganpage',
        'userpage/:user': 'userpage',
        'register':'register',
        'login':'login'},

    home: function() {
        $('#container').html('');
        React.render(<HomePage/>, document.querySelector('#container'));
        
        var slogans = new SloganCollection();
        slogans.fetch({success: function(){
            React.render(<ListingComponent slogans={slogans}/>, document.querySelector("#container"));

        function newSlogan (SloganModel) {
            console.log('newSlogan was run');
            newsloganinput.add(SloganModel);
        }

    },

    sloganpage: function(slogan){
        $('#container').html('');
      React.render(<SloganPage/>, document.querySelector('#container'));
    },

    userpage:function(user){
        $('#container').html('');
        React.render(<UserPage/>, document.querySelector('#container'));

        var user = new UserModel();
        users.fetch({success: function() {
            React.render(<userhistorycomponent user={user}/>, document.querySelector("#container"));
    },
    
    register:function(){
        $('#container').html('');
        React.render(<Register/>, document.querySelector('#container'));
    },

    login:function(){
        $('#container').html('');
        React.render(<Login/>, document.querySelector('#container'));
    }

var app = new App();
Backbone.history.start();
app.navigate('edit');

});