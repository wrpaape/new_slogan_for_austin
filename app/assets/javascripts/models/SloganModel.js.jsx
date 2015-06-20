SloganModel = Backbone.Model.extend({
	defaults: {
		body: null,
		numLikes:
		numHates:
		//calculate overall rating by adding together
		comments_count: null,
		created_at: null,
		updated_at: null,
		user_id: null,

	},
	urlRoot: 'http://localhost:3000/slogans',
	idAttribute: 'id'
});
	