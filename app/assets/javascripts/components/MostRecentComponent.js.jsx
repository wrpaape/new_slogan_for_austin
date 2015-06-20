var MostRecent = React.createClass({
    render: function () {


        return (
          <div>
            <h1> Most Liked </h1>
            <section id="most-recent-list">
            </section>
          </div>
        );
        $.get('http://localhost:3000/mostrecent', function(data){ 
			var recent = data.mostrecent.slogan;
			$('#most-recent-list').html("");
			if(recent===null){
				console.log("recent is null");
			}
			else{for(var i=0;i<recent.length;i++){
				$('#most-recent-list').append("<div ref ='" + recent[i].id + "'>" + recent[i] +"<br/></div>");
				}
			};
		});
    }
});