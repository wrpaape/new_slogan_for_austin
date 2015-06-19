var React = require("react");

module.exports = React.createClass ({
	render: function() {
		var categoryElements = this.props.categories.map(function(model) {
			return (<li role="presentation">
				//<a href="#/categories/"+ model.get("slug")}>{model.get("name")}</a></li>
		});

		return
		//top nav for user info
		//when user is logged in, "login" should change to "logout"
		<ul className="nav nav-pills nav-stacked">
            <li role="presentation"><a href="#">Login</a></li>
            <li role="presentation"><a href="#">Sign Up</a></li>
        </ul>
	}
});