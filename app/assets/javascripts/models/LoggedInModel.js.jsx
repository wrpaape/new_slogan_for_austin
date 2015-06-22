var LoggedInModel = Backbone.Model.extend({
	defaults: {

		name: "admin",
		password: "admin"

	},
	urlRoot: 'http://localhost:3000/login',
	idAttribute: 'id'
});

