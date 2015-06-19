SloganCollection = Backbone.Collection.extend({
	model: SloganModel,
	url: 'localhost:3000/slogans'
});