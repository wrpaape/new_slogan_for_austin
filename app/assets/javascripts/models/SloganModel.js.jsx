SloganModel = Backbone.Model.extend({
	defaults: {
		body: null,
		// numLikes: 0,
		// numHates: 0,
		//calculate rating by adding these two 
		rating: null,
		comments_count: null,
		created_at: null,
		updated_at: null,
		user_id: null,

	},
	urlRoot: 'localhost:3000/slogans',
	idAttribute: 'id'
});
	