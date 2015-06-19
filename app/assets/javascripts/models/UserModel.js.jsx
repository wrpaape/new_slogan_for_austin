


UserModel = Backbone.Model.extend({
	defaults: {
		id: null,
		name: null,
		email: null,
		password:null,
		slogans_count: null,
		comments_count: null,
		rating: null,
		rating_slogan: null,
		rating_comment: null,
		created_at: null,
		updated_at:null,

	},
	urlRoot: 'http://localhost:3000/users',
	idAttribute: 'id'
});
	