var HateButton = React.createClass({
    render: function () {
        return (
          
            <button className="hate" onClick={this.addHate}>{this.props.slogan.get('hates')} HATE 
            </button>
          
          
        );
    },
        
    addHate: function(){
       console.log('addHate')
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
                hates: 1,
                likes: 0,
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