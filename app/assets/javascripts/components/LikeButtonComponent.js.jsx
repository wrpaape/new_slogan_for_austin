
var LikeButton = React.createClass({
    render: function () {
        return (
          
          	<button className="like" onClick={this.addLike}>LIKE 
          	</button>
          
          
        );
    },
        
    addLike: function(){
      console.log(SloganCollection);
      var book = SloganCollection.findWhere('id'==this.props.key);
      
      console.log(book);

    
    }
});
//correctSlogan.set({likes: correctSlogan.get('likes')+1});
