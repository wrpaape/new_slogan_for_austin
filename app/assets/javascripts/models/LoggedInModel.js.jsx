
LoggedInModel = Backbone.Model.extend({
	defaults: {
		
		name: "keithreynolds",
		email: "keithreynolds@keith.com",
		password: "boo"

	},
	urlRoot: 'http://localhost:3000/login',
	idAttribute: 'id'
});
	
