CommentCollection = Backbone.Collection.extend({
	model: CommentModel,
	url: 'localhost:3000/comments'
});