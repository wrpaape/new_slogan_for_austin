var InputSlogan = React.createClass({
    render: function () {
        return (
          <div className="sloganclass">
            <form ref="slogan-form">
            	<input id="sssss" ref="sloganbody" className="sloganinput"/>
            	<button className="sloganbutton" ref="slogan-button" onClick={this.addSlogan}>SUBMIT A SLOGAN</button>
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
    	newSlog.save();
    	sloganlist.add(newSlog);
    	app.navigate('home', {trigger: true});
    	app.navigate('',{trigger:true});

    }

});

