RateCollection = Backbone.Collection.extend({
	model: RateModel,
	url: 'http://localhost:3000/rates'
});