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
    },

    sloganpage: function(slogan){
        $('#container').html('');
      React.render(<SloganPage/>, document.querySelector('#container'));

    },
    userpage:function(user){
        $('#container').html('');
        React.render(<UserPage/>, document.querySelector('#container'));
    },
    register:function(){
        $('#container').html('');
        React.render(<Register/>, document.querySelector('#container'));
    },
    login:function(){
        $('#container').html('');
        React.render(<Login/>, document.querySelector('#container'));
    }

});


var app = new App();
Backbone.history.start();
  


var log = new LoggedInModel();
var loglist = new LoggedInCollection;
log.save();
loglist.add(log);
loglist.fetch();

$.get('http://localhost:3000/slogans/liked', function(likey){ 
    console.log(likey);
    $('#most-liked-list').html("");
    for(var i=0;i<likey.length;i++){
    $('#container').append("<div ref ='"+ likey[i].attr('id') + "'>" + likey[i] +"<br/></div>");
    }


});