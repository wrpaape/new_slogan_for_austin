var InputSlogan = React.createClass ({
	render: function() {
		return (
			<form className="new-slogan-form">
			<h1>Enter your slogan idea:</h1>
				<input id="newslogantext" ref="textarea" type= "text" value="Austin: we got bats." />
				<button type= "submit">Submit </button>
			</form>
		);
	},
//new slogan function
	submitSlogan: function(e) {
		e.preventDefault();
		var newsloganinput = new SloganModel({
			body: $("#newslogantext").val();
			// numLikes: this.refs.numLikes.getDOMNode().value,
			// numHates: this.refs.numHates.getDOMNode().value,
		});

});
		
	

	


