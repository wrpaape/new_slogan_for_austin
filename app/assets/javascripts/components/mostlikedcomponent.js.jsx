var MostLiked = React.createClass({
    render: function () {


        return (
          <div>
            <h1> Most Liked </h1>
            <section id="most-liked-list">
            </section>
          </div>
        );
        $.get('http://localhost:3000/mostliked', function(data){ 
			var likey = data.mostliked.slogan;
			$('#most-liked-list').html("");
			if(likey===null){
				console.log("most liked is null");
			}
			else{for(var i=0;i<likey.length;i++){
				$('#most-liked-list').append(likey[i]+"<br/>");
				}
			};
		});
    }
});