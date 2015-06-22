var LoggedInCollection = Backbone.Collection.extend({
	model: LoggedInModel,
	url: 'login'
});
