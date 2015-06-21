var HateButton = React.createClass({
    render: function () {
        return (
          
            <button className="like" onclick={this.addHate}>HATE 
            </button>
          
          
        );
    },
        
    addHate: function(){
      var correctSlogan =  SloganCollection.find(function(model){model.get('id') == this.props.slog; });
    correctSlogan.set({hates: correctSlogan.get('hates')+1});

    }
});