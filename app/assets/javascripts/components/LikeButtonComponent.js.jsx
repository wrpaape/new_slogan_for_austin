
var LikeButton = React.createClass({
    render: function () {
        return (
          
            <button className="like" onClick={this.addLike}>{this.props.slogan.get('likes')} LIKE 
            </button>
          
          
        );
    },
        
    addLike: function(){
       
var numLikes = this.props.slogan.get('likes')+1;
this.props.slogan.set({likes:numLikes});
var ppp = new RateModel({
    hates: 0,
    likes: 1,
    slogan_id: this.props.slogan.get('id')
});

ppp.save();

    // correctSlogan.set({hates: correctSlogan.get('hates')+1});

    }
});