
var LoggedInModel = Backbone.Model.extend({
	defaults: {
		
		name: "admin",
		email: "admin@admin.com",
		password: "admin"

	},
	urlRoot: 'http://localhost:3000/login',
	idAttribute: 'id'
});
	
