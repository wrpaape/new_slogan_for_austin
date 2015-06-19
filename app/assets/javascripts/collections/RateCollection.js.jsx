RateCollection = Backbone.Collection.extend({
	model: RateModel,
	url: 'localhost:3000/rates'
});