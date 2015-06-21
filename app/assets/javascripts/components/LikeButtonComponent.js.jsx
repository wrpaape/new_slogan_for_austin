
var LikeButton = React.createClass({
    render: function () {
        return (
          
          	<button className="like" onclick={this.addLike}>LIKE 
          	</button>
          
          
        );
    },
        
    addLike: function(){
      var correctSlogan =  SloganCollection.find(function(model){model.get('id') == this.props.slog; });
    correctSlogan.set({likes: correctSlogan.get('likes')+1});

    }
});
