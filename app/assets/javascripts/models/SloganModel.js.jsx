SloganModel = Backbone.Model.extend({
	defaults: {
		body: null,
		rating: null,
		comments_count: null,
		created_at: null,
		updated_at: null,
		user_id: null,

	},
	urlRoot: 'http://localhost:3000/slogans',
	idAttribute: 'id'
});
	