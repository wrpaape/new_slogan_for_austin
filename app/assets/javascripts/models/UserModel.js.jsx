var UserModel = Backbone.Model.extend({
	defaults: {

		name: "",
		password: ""

	},
	urlRoot: 'users',
	idAttribute: 'id'
});

