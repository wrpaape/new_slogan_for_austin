//for components we need React to build
var React = require("react");
// var Categories = require ("./categoriescomponent");

module.exports = React.createClass({ //react uses createclass instead of collection/model.extend
//every component needs a render method
	render: function() {
		return (
		<div className="container">
			<div className="row">
				<div className = "col-md-4 col-lg-4 col-xl-4">
					stuff
					//<Categories categories ={this.props.categories} />
				</div>
				<div className = "col-md-4 col-lg-4 col-xl-4">
					stuff
				</div>
				<div className = "col-md-4 col-lg-4 col-xl-4">
					stuff
				</div>
			</div>
		</div>

		);
	}
});