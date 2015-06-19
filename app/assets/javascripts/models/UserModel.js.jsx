


UserModel = Backbone.Model.extend({
	defaults: {
		
		name: "",
		email: "",
		password: ""

	},
	urlRoot: 'http://localhost:3000/users',
	idAttribute: 'id'
});
	