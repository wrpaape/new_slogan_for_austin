//should be done
var AddComment = React.createClass({
    render: function () {
        return (
          <form className="new-comment-form">
			<h1>Enter a comment:</h1>
				<input id="newcommenttext" ref="textarea" type= "text" value="That slogan sucks butts." />
				<button type= "submit"> Submit </button>
			</form>
        ),

    //add comment function
    	addComment: function (e) {
    		var newcommentinput = new CommentModel({
				body: $("#newcommenttext").val();
   			})
    	}
    }

});