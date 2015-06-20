SloganCollection = Backbone.Collection.extend({
	model: SloganModel,
	url: 'http://localhost:3000/slogans'
});