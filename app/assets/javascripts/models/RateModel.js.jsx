var RateModel = Backbone.Model.extend({
	defaults: {
		likes: null,
		hates: null,
		created_at: null,
		updated_at: null,
		belongs_to: null,
		user_id: null,
		slogan_id: null,
		comment_id: null

	},
	urlRoot: 'rates',
	idAttribute: 'id'
});
