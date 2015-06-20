var SloganComponent = React.createClass ({
	render: function() {
		return (
			<form>
			<h1>Enter your slogan idea:</h1>
				<input ref="textarea" type= "text" value="Austin: we got bats." />
				<button type= "submit">Submit </button>
			</form>
		);
	}
});