var InputSlogan = React.createClass({
    render: function () {
        return (
          <div>
            <form ref="slogan-form">
            	<input id="sssss" ref="sloganbody"/>
            	<button ref="slogan-button" onClick={this.addSlogan} />
            </form>
            
          </div>
        );
    },
    addSlogan: function (e){
    	e.preventDefault();
    	
    	console.log(React.findDOMNode(this.refs.sloganbody).value);
    	newSlog = new SloganModel({
    		body: React.findDOMNode(this.refs.sloganbody).value
    		});
    	console.log(newSlog);
    	sloganlist.add(newSlog);

    }

});

