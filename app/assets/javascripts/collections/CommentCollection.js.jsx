CommentCollection = Backbone.Collection.extend({
	model: CommentModel,
	url: 'http://localhost:3000/comments'
});