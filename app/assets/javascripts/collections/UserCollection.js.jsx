UserCollection = Backbone.Collection.extend({
	model: UserModel,
	url: 'localhost:3000/users'
});