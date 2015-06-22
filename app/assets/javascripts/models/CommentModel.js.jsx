var CommentModel = Backbone.Model.extend({
	defaults: {
		body: null,
		rating: null,
		created_at: null,
		updated_at: null,
		user_id: null,
		slogan_id: null

	},
	urlRoot: 'comments',
	idAttribute: 'id'
});
