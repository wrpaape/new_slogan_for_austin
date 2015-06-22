var UserModel = Backbone.Model.extend({
	defaults: {

		name: "",
		password: ""

	},
	urlRoot: 'http://localhost:3000/users',
	idAttribute: 'id'
});

