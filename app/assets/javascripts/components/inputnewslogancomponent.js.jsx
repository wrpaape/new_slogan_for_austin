
var InputSlogan = React.createClass ({
	render: function() {
		return (
			<form className="new-slogan-form">
			<h1>Enter your slogan idea:</h1>
				<input id="newslogantext" ref="textarea" type= "text" value="Austin: we got bats." />
				<button type= "submit">Submit </button>
			</form>
		);
	
//new slogan function
	submitSlogan: function(e) {
		e.preventDefault();
		var newsloganinput = new SloganModel({
			body: $("#newslogantext").val();
			
		})

	});
	
	ifNotLoggedIn: function(e) {
		e.preventDefault();
		$("#newslogantext").onClick
		//when newslogantext is clicked and user is not logged in,
		//trigger an alert (below as swal) that directs user to log in page
		//aaaand WTF?
	}
	swal({   title: "HTML <small>Title</small>!",
	   text: "A custom <span style="
	   color:#F8BB86">html<span> message.",   
	   html: true 
	});
		
	
});

