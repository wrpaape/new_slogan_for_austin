
var HateButton = React.createClass({
   render: function () {
       return (
         
           <button className="like" onClick={this.addHate}>{this.props.slogan.get('hates')} HATE 
           </button>
         
         
       );
   },
       
   addHate: function(){
      
var numHates = this.props.slogan.get('hates')+1;
this.props.slogan.set({hates:numHates});
var rrr = new RateModel({
   hates: 1,
   likes: 0,
   slogan_id: this.props.slogan.get('id')
});

rrr.save();

   // correctSlogan.set({hates: correctSlogan.get('hates')+1});

   }
});