var SloganModel = Backbone.Model.extend({
	defaults: {
		body: null
		
	

	},
	urlRoot: 'http://localhost:3000/slogans',
	idAttribute: 'id'
});
	