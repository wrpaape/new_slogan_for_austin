var SloganModel = Backbone.Model.extend({
	defaults: {

		body: null,
		rating: null,
		likes: 0,
		hates: 0,
		trend_coeff: 0.0,
		trend_coeffs: "",
		//calculate overall rating by adding together
		comments_count: null,
		created_at: null,
		updated_at: null,
		user_id: null

	},

	urlRoot: '/slogans',

	idAttribute: 'id'
	
});
	