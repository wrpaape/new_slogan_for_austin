var SloganModel = Backbone.Model.extend({
	defaults: {
		body: null,
		
	
		user_id: null

	},
	urlRoot: 'http://localhost:3000/slogans',
	idAttribute: 'id'
});
	