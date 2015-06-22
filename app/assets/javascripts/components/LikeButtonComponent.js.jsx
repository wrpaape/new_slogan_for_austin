
var LikeButton = React.createClass({
    render: function () {
        return (
          
            <button className="like" onClick={this.addLike}>{this.props.slogan.get('likes')} LIKE 
            </button>
          
          
        );
    },
        
    addLike: function(){
       console.log('addLike')
       var self = this;

        // var rrr = new RateModel({
        //     hates: 1,
        //     likes: 0,
        //     slogan_id: this.props.slogan.get('id')
        // });

        // rrr.save({
        //     success: function(result) {
        //       console.log(result);
        //       console.log(result.hates);
        //       var numHates = result.hates;
        //       this.props.slogan.set({hates:numHates});

        //     }
        // });
        $.post(
            '/rates',
            {
                hates: 0,
                likes: 1,
                slogan_id: this.props.slogan.get('id')
            },
            'json'
          )
          .success(function(result) {
            self.props.slogan.set({likes:result.likes, hates:result.hates});
              console.log(result);
          })
          .error(function(error) {
            // console.log(error);
            // $('.porkbelly').append('<h1>your password or name is incorrect or you need to register</h1>');
          })
          
    // correctSlogan.set({hates: correctSlogan.get('hates')+1});

    }
});