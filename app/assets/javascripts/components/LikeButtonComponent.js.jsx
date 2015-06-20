var LikeButton = React.createClass({
    render: function () {
        return (
          
          	<button className="like">LIKE 
          	</button>
          
          
        );
        $(this).on('click',addLike);

        function addLike(){
        	fetch(SloganCollection);
     		var correctSlogan = SloganCollection.findWhere(model.id===($.closest("div").attr("ref")));
     		correctSlogan.likes = correctSlogan.likes + 1;

        }
    }
});