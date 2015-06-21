var HateButton = React.createClass({
    render: function () {
        return (
          
          	<button className="hate">HATE 
          	</button>
          
          
        );
        $(this).on('click',addLike);

        function addLike(){
        	fetch(SloganCollection);
     		var correctSlogan = SloganCollection.findWhere(model.id===($.closest("div").attr("ref")));
     		var correctSloganHates = correctSlogan.get('hates');
     		correctSlogan.set({hates:correctSloganHates+1});

        }
    }
});