

var MostLiked = React.createClass({
    render: function () {

        return (
          <div>
            <h1> Most Liked </h1>
            <section id="most-liked-list">
            </section>
          </div>
        );
        $.get('http://localhost:3000/slogans/liked', function(likey){ 
			
			$('#most-liked-list').html("");
			for(var i=0;i<likey.length;i++){
				$('#most-liked-list').append("<div ref ='"+ likey[i].attr('id') + "'>" + likey[i] +"<br/></div>");
			}
		
		});
    }
});

