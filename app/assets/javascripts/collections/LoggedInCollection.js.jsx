var LoggedInCollection = Backbone.Collection.extend({
	model: LoggedInModel,
	url: 'http://localhost:3000/login'
});